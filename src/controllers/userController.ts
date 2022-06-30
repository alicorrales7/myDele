import { Request, Response } from "express";
import { Service } from "typedi";
import UserService from "../services/userService";

@Service()
class UserController {
    constructor(private readonly userService: UserService) { }

    async getAllUsers(res: Response) {
        const resultFind = await this.userService.getAllUsers();
        return res.json({"Result":"Get User",resultFind});
    }

    async getUser(req: Request, res: Response) {
        const user = req.params.id
        if (user.length == 24) {
            const resultGetUser = await this.userService.getUser(user);
            return res.json(resultGetUser)
        } else {
            return res.status(200).json({ "Result": "Format Id Incorrecto" })
        }
    }

    async getAllProducts(req: Request, res: Response) {
        const user = req.params.id;
        if (user.length == 24) {
            const resultGetProducts = await this.userService.getProducts(user)
            return res.json({"Result":"Get All Product of User",resultGetProducts})
        } else {
            return res.json({ "Result": "Format Id Incorrecto" })
        }

    }

    async insertUsers(req: Request, res: Response) {
        const insert = req.body
        const resultInsert = await this.userService.insertUsers(req.body);
        return res.status(201).json({"Result":"Insert is Successful",resultInsert,insert})
    }

    async updateUser(req: Request, res: Response) {
        const user = req.params.id
        const update = req.body
        if (user.length == 24) {
            const resultUpdate = this.userService.updateUser(user, req.body);
            return res.json({"Result":"Update User is Successful",resultUpdate,update})
        } else {
            return res.json({ "Result": "Format Id Incorrecto" })
        }
    }

    async deleteUser(req: Request, res: Response) {
        const user = req.params.id
        if (user.length == 24) {
            const resultDelete = this.userService.deleteUser(req.params.id)
            return res.status(204).json({"Result":"Delete User"})
        } else {
            return res.json({ "Result": "Format Id Incorrecto" })
        }
    }
}

export default UserController;