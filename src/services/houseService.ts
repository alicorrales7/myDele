import { Service } from "typedi";
import { HouseDOT } from "../dto/houseDTO";
import HouseRepository from "../repository/houseRepository";
import { HouseMap } from "../util/mapper/houseMap";

@Service()
class HouseService{

    constructor(private readonly houseRepository: HouseRepository,
        private houseMap: HouseMap){}

    async getAllHouse(){
        const resultGetAllHouse = this.houseRepository.find()
        return resultGetAllHouse;
    }

    async getHouses(id:string){
        const resultGetHouse = this.houseRepository.findById(id);
        return resultGetHouse;
    }

    async insertHouse (document:HouseDOT){
        const transp = this.houseMap.mapJsonToEntity(document)
        const resultInsert = this.houseRepository.insert(transp)
    }

    async updateHouse(id:string, document:JSON){
        const resultUpdate = this.houseRepository.update(id,document)
    }

    async deleteHouse(id:string){
        const resultDelete = this.houseRepository.delete(id)
    }
}

export default HouseService;