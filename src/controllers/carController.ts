import { Request, Response } from "express";
import { Service } from "typedi";
import CarService from "../services/carService";
import { CarMap } from "../util/mapper/carMap";

@Service()
class CarController {

    constructor(private readonly carService: CarService,
        private mapperCar: CarMap,) { }


    async getAllCars(res: Response) {
        const resultFind = await this.carService.getAllCar();

        return res.json({"Result":"Get All Car",resultFind});
    }

    async getCar(req: Request, res: Response) {
        const user = req.params.id
        if (user.length == 24) {
            const resultGetCar = await this.carService.getCar(user);
            return res.json({"Result":"Get Car",resultGetCar});
        } else {
            return res.status(200).json({ "Result": "Format Id Incorrecto" })
        }

    }

    async insertCar(req: Request, res: Response) {
        const insert = req.body
        const resultInsert = await this.carService.insertCars(req.body);
        return res.json({"Result":"Insert is Successful",resultInsert,insert})
    }

    async updateCar(req: Request, res: Response) {
        const user = req.params.id
        const update = req.body
        if (user.length == 24) {
            const resultUpdate = this.carService.updateCar(req.params.id, req.body);
            return res.json({"Result":"Update Car is Successful",resultUpdate,update})
        } else {
            return res.json({ "Result": "Format Id Incorrecto" })
        }
    }

    async deleteCar(req: Request, res: Response) {
        const user = req.params.id
        if (user.length == 24) {
        const resultDelete = this.carService.deleteCar(req.params.id)
        return res.status(204).json({"Result":"Delete Car is Successful", resultDelete})
    } else {
        return res.json({ "Result": "Format Id Incorrecto" })
    }
    }
}

export default CarController;