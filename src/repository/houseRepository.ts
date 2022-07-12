import { Service } from "typedi";
import { HouseDOT } from "../dto/houseDTO";
import { houseModel } from "../models/house";
import { userModel } from "../models/User";
import { HouseMap } from "../util/mapper/houseMap";
import { houseCacheService } from "../services/cache/entitysCacheService/houseCacheService";
@Service()
class HouseRepository {
    constructor(private houseMap: HouseMap,private houseCache:houseCacheService){}

    async find() {
        const find = await houseModel.find()
        const carArray: HouseDOT[] = [];

        for (let i of find) {
            const vol = this.houseMap.mapEntityToDto(i)
            carArray.push(vol)
        }
        return carArray;
    }

    async findById(id: string):Promise< HouseDOT | null> {
        const convert = { "_id": id };
        let houseExist = this.houseCache.read(id);
        
        if(!houseExist){
            const housefindById = await houseModel.findById(convert);
            const returnDto = this.houseMap.mapEntityToDto(housefindById)
            return returnDto;
        }
        else{
            console.log('Save in Redis');
            return houseExist;
        }
        }
    
            

        


    async insert(document: HouseDOT) {

        
        const houseInserts = await houseModel.insertMany(document);
        const firstDocument = houseInserts[0]
        const houseIdDTO = firstDocument.id
        const userId = firstDocument?.userId
        const SaveHouseRedis = this.houseCache.set(houseIdDTO, document)

        for(let i of houseInserts){
            const insertUserModel = await userModel.updateMany({_id:userId},{
                $push:{productHouses: i?.id}
            })
        }
        return houseInserts;
    }
    
        
        

    async update(id: string, document: JSON) {
        const convert = { "_id": id }
        const houseUbdate = await houseModel.updateMany(convert, document);
        return houseUbdate;
    }

    async delete(id: string) {
        const convert = { "_id": id };
        const house = await houseModel.findById(id);
        const houseDeleteRedis = this.houseCache.del(id)
        const userId = house?.userId;
        const arrayC = await userModel.find({"_id":userId},{productHouses:true,_id:false});
        const arrayp = arrayC[0];
        const a = arrayp.productHouses;
        const arrayFor = [];
        for(let i of a ){
            if(i?.toString() != id){
                arrayFor.push(i)
            }
        }
        console.log(arrayFor);
        const updateUser = await userModel.updateOne({"_id":userId},{$set:{productHouses:arrayFor}});
        const phoneDelete = await houseModel.deleteMany(convert);
        return phoneDelete;
    }
}

export default HouseRepository;