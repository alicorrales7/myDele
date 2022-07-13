import { Service } from "typedi";
import { phoneDTO } from "../../../dto/phoneDTO";
import { PhoneMap } from "../../../util/mapper/phoneMap";
import { CacheService } from "../cacheService";

@Service()
export class phoneCacheService{
    private prefix = "productHouse_";
constructor(private cacheService:CacheService, private phoneMap:PhoneMap){}

async read(productId:string){
const readPhone = await this.cacheService.getCache(this.prefix + productId);
const phoneJSON = JSON.parse(readPhone);
if(readPhone){const phoneDTORedis = this.phoneMap.mapEntityToDto(phoneJSON)
return phoneDTORedis
}
else{
    return null
}
}






}