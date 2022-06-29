import { Service } from "typedi";
import { houseModel } from "../models/House";
import { phoneModel } from "../models/Phone";
import { userModel } from "../models/User";

@Service()
class HouseRepository {

    async find() {
        const find = await houseModel.find()
        return find;
    }

    async findById(id: string) {
        const convert = { "_id": id }
        const housefindById = await houseModel.findById(convert);
        console.log(convert);
        return housefindById;
    }

    async insert(document: JSON) {
        const houseInserts = await houseModel.insertMany(document);
        const firstDocument = houseInserts[0]
        const userId = firstDocument?.userId
        
        
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
        const phoneDelete = await phoneModel.deleteMany(convert);
        return phoneDelete;
    }
}

export default HouseRepository;