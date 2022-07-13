import { Service } from "typedi";
import { CarDTO } from "../../../dto/carDTO";
import { CarMap } from "../../../util/mapper/carMap";
import { CacheService } from "../cacheService";

@Service()
export class carCacheService{
    private prefix = "productCar_";

    constructor(private cacheService:CacheService, private map:CarMap){}

    async read(productId:string){
        let jsonString = await this.cacheService.getCache(this.prefix + productId)
        
        if(jsonString){
            const json = JSON.parse(jsonString)
            const mapping = await this.map.mapEntityToDto(json)
            return mapping;
        }
        
    }

    async set(productId:string,value:CarDTO){

        const valueConvert = JSON.stringify(value)

        const json = await this.cacheService.setCache(this.prefix + productId, valueConvert)

        return json;
    }

    async del(productId:string){
        const indexDel = await this.cacheService.deleteCache(this.prefix + productId)
        return indexDel;
    }
    
}