import { Service } from "typedi";
import { CarDTO } from "../dto/carDTO";
import CarRepository from "../repository/carRepository";
import { CarMap } from "../util/mapper/carMap";
import { createClient } from 'redis';

@Service()
class CarService{

    constructor(private readonly carRepository: CarRepository, 
        private carMap: CarMap){}
    
        

    async getAllCar(){
        const resultGetAllCar = this.carRepository.find()
        return resultGetAllCar;
    }

    async getCar(id:string):Promise<CarDTO|null >{
        
        const resultGetCar = this.carRepository.findById(id);
        return resultGetCar;
    }

    async insertCars (document:CarDTO){
        const transp = this.carMap.mapJsonToEntity(document)
        const resultInsert = this.carRepository.insert(transp)
    }

    async updateCar(id:string, document:JSON){
        const resultUpdate = this.carRepository.update(id,document)
    }

    async deleteCar(id:string){
        const resultDelete = this.carRepository.delete(id)
    }
}

export default CarService;