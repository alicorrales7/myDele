import { Service, Container } from "typedi";
import { userModel } from "../models/User";
import { UserMap } from "../util/mapper/userMap";
import { UserDTO } from "../dto/userDTO";
import { logger } from "../util/logger";



@Service()
class UserRepository {
    constructor(private userMap: UserMap) { }


    async find() {
        const find = await userModel.find()
        const carArray: UserDTO[] = [];

        for (let i of find) {
            const vol = this.userMap.mapEntityToDto(i)
            carArray.push(vol)
        }
        const logRoute = logger.info("Repository tracking all get user")
        return carArray;
    }

    //Resolve the id conversion
    async findById(id: string): Promise<UserDTO | null> {
        const convert = { "_id": id }
        const userfindById = await userModel.findById(convert);
        const returnDto = this.userMap.mapEntityToDto(userfindById)
        const logRoute = logger.info("Repository tracking get user")
        return returnDto;
    }

    async findByIdProducts(id: string) {
        const convert = { "_id": id }
        const findAllProduct = await userModel.findById(convert,
            { product: true, _id:false }).populate('productCars').populate('productHouses').populate('productPhones')
        const logRoute = logger.info("Repository Tracking get all user products")
        return findAllProduct;
    }

    async insert(document: UserDTO) {
        const usersInserts = await userModel.insertMany(document);
        const logRoute = logger.info("Follow Repository insert user")
        return usersInserts;
    }

    async update(id: string, document: JSON) {
        const convert = { "_id": id }
        const userUbdate = await userModel.updateMany(convert, document);
        const logRoute = logger.info("Follow Repository edit user")
        return userUbdate;
    }

    async delete(id: string) {
        const convert = { "_id": id }
        const userDelete = await userModel.deleteMany(convert);
        const logRoute = logger.info("Follow Repository delete user")
        return userDelete;
    }
}

export default UserRepository;




