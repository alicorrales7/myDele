import { join } from "path";
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
if(readPhone){
    const phoneJSON = JSON.parse(readPhone);
    const phoneDTORedis = this.phoneMap.mapEntityToDto(phoneJSON)
return phoneDTORedis
}
else{
    return null
}
}

async set(productId:string, value:phoneDTO){
    const valueConvert = JSON.stringify(value);
    const json = await this.cacheService.setCache(this.prefix + productId, valueConvert);
    return json 
}
async del(productId:string){
    const indexDel = await this.cacheService.deleteCache(this.prefix + productId)
    return indexDel;
}
}





