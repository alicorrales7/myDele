import { Service } from "typedi";
import { CarModel} from "../models/car";
import { userModel } from "../models/User";
import { CarDTO } from "../dto/carDTO";
import { CarMap } from "../util/mapper/carMap";
import { carCacheService } from "../services/cache/entitysCacheService/carCacheService";


@Service()
class CarRepository {
    constructor(private carMap: CarMap,private carCacheService: carCacheService) { }

    async find() {
        console.log(process.env.URL_MONGO);
        const find = await CarModel.find()
        const carArray: CarDTO[] = [];
        for (let i of find) {
            const vol = this.carMap.mapEntityToDto(i)
            carArray.push(vol)
        }
        return carArray;
    }

    async findById(id: string): Promise<CarDTO | null> {
        const convert = { "_id": id }
        const carfindById = await CarModel.findById(convert);
        const returnDto = this.carMap.mapEntityToDto(carfindById)
        console.log(carfindById)

        return returnDto;


    }

    async insert(document: CarDTO) {
        const carInserts = await CarModel.insertMany(document);
        const firstDocument = carInserts[0]
        const userId = firstDocument?.userId

        const redis = await this.carCacheService.set(userId,firstDocument)

        for (let i of carInserts) {
            const insertUserModel = await userModel.updateMany({ _id: userId }, {
                $push: { productCars: i?.id }
            })
        }
        return carInserts;
    }

    async update(id: string, document: JSON) {
        const convert = { "_id": id }
        const compId = await CarModel.findById(convert)
        if(compId != null){
        const carUbdate = await CarModel.updateMany(convert, document);
        return carUbdate;
        }else{
            const parameter = {};
            return parameter;
        }
    }

    async delete(id: string) {
        const convert = { "_id": id };
        const car = await CarModel.findById(id);
        
        const userId = car?.userId;
        const arrayC = await userModel.find({"_id":userId},{productCars:true,_id:false});
        const arrayp = arrayC[0];
        const a = arrayp.productCars;
        const arrayFor = [];
        for(let i of a ){
            if(i?.toString() != id){
                arrayFor.push(i)
            }
        }
        const updateUser = await userModel.updateOne({"_id":userId},{$set:{productCars:arrayFor}});
        const carDelete = await CarModel.deleteMany(convert);
        return carDelete;

    }



}

export default CarRepository;