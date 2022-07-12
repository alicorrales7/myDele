import { Service } from "typedi";
import { HouseDOT } from "../../../dto/houseDTO";
import { HouseMap } from "../../../util/mapper/houseMap";
import { CacheService } from "../cacheService";

@Service()
export class houseCacheService{
    private prefix = "productHouse_";

    constructor(private cacheService:CacheService, private map:HouseMap){}

    async read(productId:string){
        console.log(productId + 'aqui si entro')
        let jsonString = await this.cacheService.getCache(this.prefix + productId)
        
        if(jsonString){
            const json = JSON.parse(jsonString)
            const mapping = await this.map.mapEntityToDto(json)
            return mapping;
        }else{
            return null;
        }
        
    }

    async set(productId:string,value:HouseDOT){
        const valueConvert = JSON.stringify(value)
        const json = await this.cacheService.setCache(this.prefix + productId, valueConvert)

        return json;
    }

    async del(productId:string){
        const indexDel = await this.cacheService.deleteCache(this.prefix + productId)
        return indexDel;
    }
    
}