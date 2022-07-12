import { Service } from "typedi";
import { CacheAdapterInterface } from "../../interface/CacheServiceInterface";
import { CacheServiceFactory } from "./ChacheServiceFactory";
import { RedisAdapter } from "./redisAdapter";
@Service()
export class CacheService{
    adapter: RedisAdapter;

    constructor(cacheAdapter:RedisAdapter){
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