import { Request,Response } from "express";
import { Service } from "typedi";
import PhoneService from "../services/phoneService";

@Service()
class PhoneController{

    constructor(private readonly phoneService: PhoneService){}

   
    async getAllPhone(res:Response){
        const resultFind = await this.phoneService.getAllPhone();
        return res.json(resultFind);
    }

    async getPhone(req:Request, res:Response){
        const user = req.params.id
        const resultGetPhone = await this.phoneService.getPhone(user);
        return res.json(resultGetPhone)
    }

    async insertPhone(req:Request, res:Response){
        const resultInsert = await this.phoneService.insertPhone(req.body);
        return res.json(resultInsert)
    }

    async updatePhone(req:Request, res:Response){
        const resultUpdate = this.phoneService.updatePhone(req.params.id,req.body);
        return res.json(resultUpdate)
    }

    async deletePhone(req:Request, res:Response){
        const resultDelete = this.phoneService.deletePhone(req.params.id)
        return res.status(204).send("delete phone")
    }
}

export default PhoneController;