import { Service } from "typedi";
import CarRepository from "../repository/carRepository";

@Service()
class CarService{

    constructor(private readonly carRepository: CarRepository){}

    async getAllCar(){
        const resultGetAllCar = this.carRepository.find()
        return resultGetAllCar;
    }

    async getCar(id:string){
        const resultGetCar = this.carRepository.findById(id);
        return resultGetCar;
    }

    async insertCars (document:JSON){
        const resultInsert = this.carRepository.insert(document)
    }

    async updateCar(id:string, document:JSON){
        const resultUpdate = this.carRepository.update(id,document)
    }

    async deleteCar(id:string){
        const resultDelete = this.carRepository.delete(id)
    }
}

export default CarService;