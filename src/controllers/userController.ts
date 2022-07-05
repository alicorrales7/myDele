import { Request, Response } from "express";
import { Service } from "typedi";
import UserService from "../services/userService";
import { logger } from "../util/logger";

@Service()
class UserController {
    constructor(private readonly userService: UserService) { }

    async getAllUsers(res: Response) {
        const resultFind = await this.userService.getAllUsers();
        const logController = logger.info("Controller tracking all get user")
        return res.json({"Result":"Get User",resultFind});
    }

    async getUser(req: Request, res: Response) {
        const user = req.params.id
        if (user.length == 24) {
            const resultGetUser = await this.userService.getUser(user);
            const logController = logger.info("Controller tracking get user")
            return res.json(resultGetUser)
        } else {
            const logController = logger.warn(
                "Controller get user: Format Id Incorrecto")
            return res.status(200).json({ "Result": "Format Id Incorrecto" })
        }
    }

    async getAllProducts(req: Request, res: Response) {
        const user = req.params.id;
        if (user.length == 24) {
            const resultGetProducts = await this.userService.getProducts(user)
            const logController = logger.info("Controller Tracking get all user products")
            return res.json({"Result":"Get All Product of User",resultGetProducts})
        } else {
            const logController = logger.warn(
                "Controller get all product of user: Format Id Incorrecto")
            return res.json({ "Result": "Format Id Incorrecto" })
        }

    }

    async insertUsers(req: Request, res: Response) {
        const insert = req.body
        const resultInsert = await this.userService.insertUsers(req.body);
        const logController = logger.info("Follow Controller insert user")
        return res.status(201).json({"Result":"Insert is Successful",resultInsert,insert})
    }

    async updateUser(req: Request, res: Response) {
        const user = req.params.id
        const update = req.body
        if (user.length == 24) {
            const resultUpdate = this.userService.updateUser(user, req.body);
            const logController = logger.info("Follow Controller edit user")
            return res.json({"Result":"Update User is Successful",resultUpdate,update})
        } else {
            const logController = logger.warn(
                "Controller ubdate user: Format Id Incorrecto")
            return res.json({ "Result": "Format Id Incorrecto" })
        }
    }

    async deleteUser(req: Request, res: Response) {
        const user = req.params.id
        if (user.length == 24) {
            const resultDelete = this.userService.deleteUser(req.params.id)
            const logController = logger.info("Follow Controller delete user")
            return res.status(204).json({"Result":"Delete User"})
        } else {
            const logController = logger.warn(
                "Controller delete user: Format Id Incorrecto")
            return res.json({ "Result": "Format Id Incorrecto" })
        }
    }
}

export default UserController;