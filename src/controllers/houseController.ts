import { Request,Response } from "express";
import { Service } from "typedi";
import HouseService from "../services/houseService";

@Service()
class HouseController{

    constructor(private readonly houseService: HouseService){}

   
    async getAllHouse(res:Response){
        const resultFind = await this.houseService.getAllHouse();
        return res.json(resultFind);
    }

    async getHouse(req:Request, res:Response){
        const user = req.params.id
        const resultGetCar = await this.houseService.getHouses(user);
        return res.json(resultGetCar)
    }

    async insertHouse(req:Request, res:Response){
        const resultInsert = await this.houseService.insertHouse(req.body);
        return res.json(resultInsert)
    }

    async updateHouse(req:Request, res:Response){
        const resultUpdate = this.houseService.updateHouse(req.params.id,req.body);
        return res.json(resultUpdate)
    }

    async deleteHouse(req:Request, res:Response){
        const resultDelete = this.houseService.deleteHouse(req.params.id)
        return res.status(204).send("delete house")
    }
}

export default HouseController;