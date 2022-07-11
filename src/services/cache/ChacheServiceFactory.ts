import { env } from "process";
import Container, { Service } from "typedi";
import { CacheService } from "./cacheService";
import { RedisAdapter } from "./redisAdapter";

@Service()
export class CacheServiceFactory{
    create(){
        const cacheAdapterIdentifier = process.env.CACHE_ADAPTER_REDIS
        const cacheAdapter = Container.get(RedisAdapter)

        return new CacheService(cacheAdapter)
    }
}