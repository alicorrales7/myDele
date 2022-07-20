import { Service } from "typedi";
import { phoneDTO } from "../dto/phoneDTO";
import { phoneModel } from "../models/phone";
import { phoneCacheService } from "../services/cache/entitysCacheService/phoneCacheService";
import { userModel } from "../models/user";
import { PhoneMap } from "../util/mapper/phoneMap";

@Service()
class PhoneRepository {
    constructor(private phoneMap: PhoneMap,private phonecache: phoneCacheService){}

    async find() {
        const find = await phoneModel.find()
        const carArray: phoneDTO[] = [];

        for (let i of find) {
            const vol = this.phoneMap.mapEntityToDto(i)
            carArray.push(vol)
        }
        return carArray;
    }

    async findById(id: string):Promise<phoneDTO | null> {
        const convert = { "_id": id }
        const phoneCacheId =  this.phonecache.read(id)
        if(!phoneCacheId){
        const phonefindById = await phoneModel.findById(convert);
        const returnDto = this.phoneMap.mapEntityToDto(phonefindById)
        return returnDto;
        }
        else{
            return phoneCacheId
        }
    }

    async insert(document: phoneDTO) {
        const PhoneDTOtoJson = this.phoneMap.mapJsonToEntity(document);
        let IdPhoneToString = PhoneDTOtoJson.userId.toString();

        const ReadPhoneCache = this.phonecache.read(IdPhoneToString);

        if(!ReadPhoneCache){
        const phoneInserts = await phoneModel.insertMany(document);
        const firstDocument = phoneInserts[0];
        const userId = firstDocument?.userId
        
        for(let i of phoneInserts){
            const insertUserModel = await userModel.updateMany({_id:userId},{
                $push:{productPhones: i?.id}
            })
        }
        return phoneInserts;
    }
    else return this.phonecache.set(IdPhoneToString,document)
}


    async update(id: string, document: JSON) {
        const convert = { "_id": id }
        const phoneUbdate = await phoneModel.updateMany(convert, document);
        return phoneUbdate;
    }

    async delete(id: string) {
        const convert = { "_id": id };
        const phone = await phoneModel.findById(id);
        const userId = phone?.userId;
        const arrayC = await userModel.find({"_id":userId},{productPhones:true,_id:false});
        const arrayp = arrayC[0];
        const a = arrayp.productPhones;
        const arrayFor = [];
        for(let i of a ){
            if(i?.toString() != id){
                arrayFor.push(i)
            }
        }
        const updateUser = await userModel.updateOne({"_id":userId},{$set:{productPhones:arrayFor}});
        const phoneDelete = await phoneModel.deleteMany(convert);
        return phoneDelete;
    }
}

export default PhoneRepository;