import { Service, Container } from "typedi";
import { userModel } from "../models/User";
import { Repository } from "../interface/repository";

@Service()
class UserRepository implements Repository{
    
    
    async find(){
        const find = await userModel.find()
        return find;
    }

    //Resolve the id conversion
    async findById(id:string) {
        const convert = {"_id":id}
        const userfindById = await userModel.findById(convert);
        console.log(convert);
        return userfindById;
    }

    async insert(document: JSON) {
        const usersInserts = await userModel.insertMany(document);
        return usersInserts;
    }

    async update(id:string, document:JSON){
        const convert = {"_id":id}
        const userUbdate = await userModel.updateMany(convert,document);
        return userUbdate;
    }

    async delete(id:string) {
        const convert = {"_id":id}
        const userDelete = await userModel.deleteMany(convert);
        return userDelete;
    }
    }

    export default UserRepository;

    


