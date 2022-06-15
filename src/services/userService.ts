import { Inject, Service } from "typedi";
import { userModel } from "../models/User";
import UserRepository from "../repository/userRepository";

@Service()
class UserService{
    

    constructor(private readonly userRepository: UserRepository, autorization:string){}

    async getAllUsers(){
        
        const resultGetAllUser = this.userRepository.find()
        return resultGetAllUser;
    }

    async getUser(userId:string){
        const resultGetUser = this.userRepository.findById(userId);
        return resultGetUser;
    }

    async insertUsers(user:JSON){
        const resultInsert = this.userRepository.insert(user)
    }

    async updateUser(username:string, user:JSON){
        const resultUpdate = this.userRepository.update(username,user)
    }

    async deleteUser(username:string){
        const resultDelete = this.userRepository.delete(username)
    }
}

export default UserService;