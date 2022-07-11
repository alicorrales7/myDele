import { Service } from "typedi"

export interface CacheAdapterInterface{
    
    get(index:string):any
    delete(index:string):any
    set(index:string,value:string):any
}