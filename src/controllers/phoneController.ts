import { Request, Response } from "express";
import { Service } from "typedi";
import PhoneService from "../services/phoneService";

@Service()
class PhoneController {

    constructor(private readonly phoneService: PhoneService) { }


    async getAllPhone(res: Response) {

        const resultFind = await this.phoneService.getAllPhone();
        return res.json({"Result":"Get All Phone",resultFind});
    }

    async getPhone(req: Request, res: Response) {
        const user = req.params.id
        if (user.length == 24) {
            const resultGetPhone = await this.phoneService.getPhone(user);
            return res.json({"Result":"Get Phone",resultGetPhone})
        } else {
            return res.status(200).json({ "Result": "Format Id Incorrecto" })
        }
    }

    async insertPhone(req: Request, res: Response) {
        const insert = req.body
        const resultInsert = await this.phoneService.insertPhone(req.body);
        return res.json({"Result":"Insert is Successful",resultInsert,insert})
    }

    async updatePhone(req: Request, res: Response) {
        const user = req.params.id
        const update = req.body
        if (user.length == 24) {
            const resultUpdate = this.phoneService.updatePhone(req.params.id, req.body);
            return res.json({"Result":"Update Phone is Successful",resultUpdate,update})
        } else {
            return res.json({ "Result": "Format Id Incorrecto" })
        }
    }

    async deletePhone(req: Request, res: Response) {
        const user = req.params.id
        if (user.length == 24) {
        const resultDelete = this.phoneService.deletePhone(req.params.id)
        return res.status(204).json({"Result":"Delete Phone is Successful",resultDelete})
    } else {
        return res.json({"Result":"Format Id Incorrecto"})
    }
    }
}

export default PhoneController;