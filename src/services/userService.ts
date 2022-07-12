import {  Service } from "typedi";
import UserRepository from "../repository/userRepository";
import { UserDTO } from "../dto/userDTO";
import { UserMap } from "../util/mapper/userMap";
import { logger } from "../util/logger";

@Service()
class UserService{
    

    constructor(private readonly userRepository: UserRepository, 
        private userMap: UserMap){}

    async getAllUsers(){
        const resultGetAllUser = this.userRepository.find()
        const logService = logger.info("Service tracking all get user")
        return resultGetAllUser;
    }

    async getUser(id:string){
        const resultGetUser = this.userRepository.findById(id);
        const logService = logger.info("Service tracking get user")
        return resultGetUser;
    }

    async getProducts(id:string){
        const resultGetProducts = this.userRepository.findByIdProducts(id);
        const logService = logger.info("Service Tracking get all user products")
        return resultGetProducts;
    }

    async insertUsers(document:UserDTO){
        const transp = this.userMap.mapJsonToDto(document)
        const resultInsert = this.userRepository.insert(transp)
        const logService = logger.info("Follow Service insert user")
    }

    async updateUser(id:string, document:JSON){
        const resultUpdate = this.userRepository.update(id,document)
        const logService = logger.info("Follow Service edit user")
    }
    async deleteUser(id:string){
        const resultDelete = this.userRepository.delete(id)
        const logService = logger.info("Follow Service delete user")
    }
}

export default UserService;