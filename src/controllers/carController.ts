import { Request,Response } from "express";
import { Service } from "typedi";
import { Cars } from "../models/Car";
import CarService from "../services/carService";
import { CarMap } from "../util/mapping";

@Service()
class CarController{

    constructor(private readonly carService: CarService, 
        private mapperCar:CarMap,){}

   
    async getAllCars(res:Response){
        const resultFind = await this.carService.getAllCar();
        
        return res.json(resultFind);
    }

    async getCar(req:Request, res:Response){
        const user = req.params.id
        const resultGetCar = await this.carService.getCar(user);
        
        return res.json(resultGetCar);
    }

    async insertCar(req:Request, res:Response){
        const resultInsert = await this.carService.insertCars(req.body);
        return res.json(resultInsert)
    }

    async updateCar(req:Request, res:Response){
        const resultUpdate = this.carService.updateCar(req.params.id,req.body);
        return res.json(resultUpdate)
    }

    async deleteCar(req:Request, res:Response){
        const resultDelete = this.carService.deleteCar(req.params.id)
        return res.status(204).send("delete car")
    }
}

export default CarController;