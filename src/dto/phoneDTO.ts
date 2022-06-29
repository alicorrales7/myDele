import { Entity, SafeType } from "dto-mapping"

@Entity()
export class phoneDTO{
    @SafeType({type:Number})
    model:number

    @SafeType({type:String})
    capacity: string

    @SafeType({type:Number})
    ram:number

    @SafeType({type:String})
    connectity:string

    @SafeType({type:String})
    title: string

    @SafeType({type:Number})
    price: number

    @SafeType({type:Number})
    year: number

    @SafeType({type:String})
    color: string

    @SafeType({type:String})
    userId: string

    constructor(obj:any){
        this.model = obj.model,
        this.capacity = obj.capacity,
        this.ram = obj.ram,
        this.connectity = obj.connectity,
        this.title = obj.title,
        this.year = obj.year,
        this.color = obj.color,
        this.userId = obj.userId
    }
}