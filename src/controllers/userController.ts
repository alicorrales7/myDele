import { Request,Response } from "express";
import { Service } from "typedi";
import UserService from "../services/userService";

@Service()
class UserController{
    constructor(private readonly userService:UserService){}

    async getAllUsers(res:Response){
        const resultFind = await this.userService.getAllUsers();
        return res.json(resultFind);
    }

    async getUser(req:Request, res:Response){
        const user = req.params.id
        const resultGetUser = await this.userService.getUser(user);
        return res.json(resultGetUser)
    }

    async getAllProducts(req:Request, res:Response){
        const user = req.params.id;
        const resultGetProducts = await this.userService.getProducts(user)
        return res.json(resultGetProducts)
        
    }

    async insertUsers(req:Request, res:Response){
        const resultInsert = await this.userService.insertUsers(req.body);
        return res.status(201).json(resultInsert)
    }

    async updateUser(req:Request, res:Response){
        const resultUpdate = this.userService.updateUser(req.params.id,req.body);
        return res.json(resultUpdate)
    }

    async deleteUser(req:Request, res:Response){
        const resultDelete = this.userService.deleteUser(req.params.id)
        return res.status(204).send("delete user")
    }
}

export default UserController;