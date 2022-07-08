import RedisClient from "@redis/client/dist/lib/client";
import { createClient } from "redis";
import { Service } from "typedi";
import { CacheAdapterInterface } from "../../interface/CacheAdapterService";

@Service()
export class RedisAdapter {
    private client = createClient()
    async create() {
        const client = createClient()
        client.on('error', (err) => console.log('Redis Client Error', err));
        await client.connect();
        return client
    }

    get(index:string){
        const createClient = this.client
        return createClient.get
    }

}