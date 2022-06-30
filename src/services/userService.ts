import {  Service } from "typedi";
import UserRepository from "../repository/userRepository";
import { UserDTO } from "../dto/userDTO";
import { UserMap } from "../util/mapper/userMap";

@Service()
class UserService{
    

    constructor(private readonly userRepository: UserRepository, 
        private userMap: UserMap){}

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

    async insertUsers(document:UserDTO){
        const transp = this.userMap.mapJsonToDto(document)
        const resultInsert = this.userRepository.insert(transp)
    }

    async updateUser(id:string, document:JSON){
        const resultUpdate = this.userRepository.update(id,document)
    }

    async deleteUser(id:string){
        const resultDelete = this.userRepository.delete(id)
    }
}

export default UserService;