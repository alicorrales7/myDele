import { Service, Container } from "typedi";
import { userModel } from "../models/User";



@Service()
class UserRepository {
    
    
    async find(){
        const find = await userModel.find()
        return find;
    }

    //Resolve the id conversion
    async findById(userId:string) {
        const convert = {"id":userId}
        const userfindById = await userModel.findById('62a8f231d9f274bde636ad14');
        console.log(convert);

        for(var key in userfindById){
            if(userfindById.hasOwnProperty(key)){
                console.log("La clave es: " + key + " el valor es "  )
            }
        }
        
        return userfindById;
    }

    async insert(user: JSON) {
        const usersInserts = await userModel.insertMany(user)
    }

    async update(username:string, user:JSON){
        const convert = {"username":username}
        const userUbdate = await userModel.updateMany(convert,user)
    }

    async delete(username:string) {
        const convert = {"username":username}
        const userDelete = await userModel.deleteMany(convert)
        
    }
    }

    export default UserRepository;

    


