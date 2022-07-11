import { createClient } from "redis";
import { Service } from "typedi";
import { CacheAdapterInterface } from "../../interface/CacheServiceInterface";

@Service()
export class RedisAdapter implements CacheAdapterInterface{
    

    constructor() { }
    

    async create() {
        const client = await createClient()
        client.on('ready', () => {
            console.log('Redis Service On')
        });
        await  client.connect();
        return client;
    }
    async get(index:string) {
        const client = await this.create()
        const getElement = await client.get(index)
        return getElement;
    }

    async set(index:string,value:string) {
        const client = await this.create()
        const setElement = await client.set(index,value)
        return setElement;
    }

    async delete(index:string) {
        const client  = await this.create()
        const delElement = await client.del(index)
    }

}
        




