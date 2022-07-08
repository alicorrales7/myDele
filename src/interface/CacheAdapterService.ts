import { Service } from "typedi"

export interface CacheAdapterInterface{
    
    get():any
    delete():any
    set():any
}