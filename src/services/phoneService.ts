import { Service } from "typedi";
import PhoneRepository from "../repository/phoneRepository";

@Service()
class PhoneService{

    constructor(private readonly phoneRepository: PhoneRepository){}

    async getAllPhone(){
        const resultGetAllCar = this.phoneRepository.find()
        return resultGetAllCar;
    }

    async getPhone(id:string){
        const resultGetPhone = this.phoneRepository.findById(id);
        return PhoneRepository;
    }

    async insertPhone (document:JSON){
        const resultInsert = this.phoneRepository.insert(document)
    }

    async updatePhone(id:string, document:JSON){
        const resultUpdate = this.phoneRepository.update(id,document)
    }

    async deletePhone(id:string){
        const resultDelete = this.phoneRepository.delete(id)
    }
}

export default PhoneService;