import { Service } from "typedi";
import { CacheAdapterInterface } from "../../interface/CacheServiceInterface";

@Service()
export class CacheService{
    adapter: CacheAdapterInterface;

    constructor(cacheAdapter:CacheAdapterInterface){
        this.adapter= cacheAdapter
    }

    async getCache(index:string){
        const get = await this.adapter.get(index)
        return get;
    }

    async setCache(index:string,value:string){
        const set = await this.adapter.set(index,value)
        return set;
    }

    async deleteCache(index:string){
        const del = await this.adapter.delete(index)
        return del;
    }
    
    
}