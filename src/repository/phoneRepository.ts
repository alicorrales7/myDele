import { Service } from "typedi";
import { Repository } from "../interface/repository";
import { phoneModel } from "../models/Phone";
import { userModel } from "../models/User";

@Service()
class PhoneRepository implements Repository{

    async find() {
        const find = await phoneModel.find()
        return find;
    }

    async findById(id: string) {
        const convert = { "_id": id }
        const phonefindById = await phoneModel.findById(convert);
        console.log(convert);
        return phonefindById;
    }

    async insert(document: JSON) {
        const phoneInserts = await phoneModel.insertMany(document);
        const firstDocument = phoneInserts[0];
        const userId = firstDocument?.userId
        

        for(let i of phoneInserts){
            const insertUserModel = await userModel.updateMany({_id:userId},{
                $push:{productPhones: i?.id}
            })
        }
        return phoneInserts;
    }

    async update(id: string, document: JSON) {
        const convert = { "_id": id }
        const phoneUbdate = await phoneModel.updateMany(convert, document);
        return phoneUbdate;
    }

    async delete(id: string) {
        const convert = { "_id": id }
        const phoneDelete = await phoneModel.deleteMany(convert)
        return phoneDelete;

    }
}

export default PhoneRepository;