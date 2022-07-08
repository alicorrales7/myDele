import { createClient } from "redis";
import { RedisAdapter } from "./redisAdapter";
import { Service } from "typedi";

@Service()
export class Redis{
    constructor(private redisAdapter: RedisAdapter){}

    

}

export async function  create() {
    const client = createClient()
    client.on('ready', () => {
        console.log('Redis3 GET')
      });
    await client.connect();

    const value = await client.set('key',"Ali Corrales");
    

}
