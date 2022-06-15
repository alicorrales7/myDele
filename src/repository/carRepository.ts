import { Service } from "typedi";
import { Repository } from "../interface/repository";
import { CarModel } from "../models/Car";

@Service()
class CarRepository implements Repository{

    async find() {
        const find = await CarModel.find()
        return find;
    }

    async findById(id: string) {
        const convert = { "_id": id }
        const carfindById = await CarModel.findById(convert);
        console.log(convert);
        return carfindById;
    }

    async insert(document: JSON) {
        const carInserts = await CarModel.insertMany(document);
        return carInserts;
    }

    async update(id: string, document: JSON) {
        const convert = { "_id": id }
        const carUbdate = await CarModel.updateMany(convert, document);
        return carUbdate;
    }

    async delete(id: string) {
        const convert = { "_id": id }
        const carDelete = await CarModel.deleteMany(convert)
        return carDelete;

    }
}

export default CarRepository;