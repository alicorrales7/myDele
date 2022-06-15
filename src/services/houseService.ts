import { Service } from "typedi";
import HouseRepository from "../repository/houseRepository";

@Service()
class HouseService{

    constructor(private readonly houseRepository: HouseRepository){}

    async getAllHouse(){
        const resultGetAllHouse = this.houseRepository.find()
        return resultGetAllHouse;
    }

    async getHouses(id:string){
        const resultGetHouse = this.houseRepository.findById(id);
        return resultGetHouse;
    }

    async insertHouse (document:JSON){
        const resultInsert = this.houseRepository.insert(document)
    }

    async updateHouse(id:string, document:JSON){
        const resultUpdate = this.houseRepository.update(id,document)
    }

    async deleteHouse(id:string){
        const resultDelete = this.houseRepository.delete(id)
    }
}

export default HouseService;