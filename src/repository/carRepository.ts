import { Service } from "typedi";
import { CarModel } from "../models/Car";

@Service()
class CarRepository {

    async find(){
        const find = await CarModel.find()
        return find;
    }

    async findById(id:string){
        const valueId = id;
        const resultFind = await CarModel.findById(valueId)
    }
}