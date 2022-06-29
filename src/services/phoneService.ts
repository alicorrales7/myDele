import { Service } from "typedi";
import { phoneDTO } from "../dto/phoneDTO";
import PhoneRepository from "../repository/phoneRepository";
import { PhoneMap } from "../util/mapper/phoneMap";

@Service()
class PhoneService{

    constructor(private readonly phoneRepository: PhoneRepository,
        private phoneMap: PhoneMap){}

    async getAllPhone(){
        const resultGetAllCar = this.phoneRepository.find()
        return resultGetAllCar;
    }

    async getPhone(id:string){
        const resultGetPhone = this.phoneRepository.findById(id);
        return PhoneRepository;
    }

    async insertPhone (document:phoneDTO){
        const transp = this.phoneMap.mapJsonToEntity(document)
        const resultInsert = this.phoneRepository.insert(transp)
    }

    async updatePhone(id:string, document:JSON){
        const resultUpdate = this.phoneRepository.update(id,document)
    }

    async deletePhone(id:string){
        const resultDelete = this.phoneRepository.delete(id)
    }
}

export default PhoneService;