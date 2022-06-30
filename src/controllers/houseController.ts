import { Request, Response } from "express";
import { Service } from "typedi";
import HouseService from "../services/houseService";

@Service()
class HouseController {

    constructor(private readonly houseService: HouseService) { }


    async getAllHouse(res: Response) {
        const resultFind = await this.houseService.getAllHouse();
        return res.json({"Result":"Get All Houses",resultFind});
    }

    async getHouse(req: Request, res: Response) {
        const user = req.params.id
        if (user.length == 24) {
            const resultGetCar = await this.houseService.getHouses(user);
            return res.json({"Result":"Get House",resultGetCar})
        } else {
            return res.status(200).json({ "Result": "Format Id Incorrecto" })
        }
    }

    async insertHouse(req: Request, res: Response) {
        const insert = req.body
        const resultInsert = await this.houseService.insertHouse(req.body);
        return res.json({"Result":"Insert is Successful",resultInsert,insert})
    }

    async updateHouse(req: Request, res: Response) {
        const user = req.params.id
        const update = req.body
        if (user.length == 24) {
            const resultUpdate = this.houseService.updateHouse(req.params.id, req.body);
            return res.json({"Result":"Update Car is Successful",resultUpdate,update})
        } else {
            return res.json({ "Result": "Format Id Incorrecto" })
        }
    }

    async deleteHouse(req: Request, res: Response) {
        const user = req.params.id
        if (user.length == 24) {
            const resultDelete = this.houseService.deleteHouse(req.params.id)
            return res.status(204).json({"Result":"Delete Car is Successful",resultDelete})
        } else {
            return res.json({ "Result": "Format Id Incorrecto" })
        }
    }
}

export default HouseController;