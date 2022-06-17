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

    async getUser(id:string){
        const resultGetUser = this.userRepository.findById(id);
        return resultGetUser;
    }

    async getProducts(id:string){
        const resultGetProducts = this.userRepository.findByIdProducts(id);
        return resultGetProducts;
    }

    async insertUsers(document:JSON){
        const resultInsert = this.userRepository.insert(document)
    }

    async updateUser(id:string, document:JSON){
        const resultUpdate = this.userRepository.update(id,document)
    }

    async deleteUser(id:string){
        const resultDelete = this.userRepository.delete(id)
    }
}

export default UserService;