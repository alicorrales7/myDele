import { Service } from "typedi";
import { Repository } from "../interface/repository";
import { houseModel } from "../models/House";

@Service()
class HouseRepository implements Repository{

    async find() {
        const find = await houseModel.find()
        return find;
    }

    async findById(id: string) {
        const convert = { "_id": id }
        const housefindById = await houseModel.findById(convert);
        console.log(convert);
        return housefindById;
    }

    async insert(document: JSON) {
        const houseInserts = await houseModel.insertMany(document);
        return houseInserts;
    }

    async update(id: string, document: JSON) {
        const convert = { "_id": id }
        const houseUbdate = await houseModel.updateMany(convert, document);
        return houseUbdate;
    }

    async delete(id: string) {
        const convert = { "_id": id }
        const houseDelete = await houseModel.deleteMany(convert)
        return houseDelete;

    }
}

export default HouseRepository;