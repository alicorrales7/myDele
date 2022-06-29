import { Entity,SafeType } from "dto-mapping"

@Entity()
export class HouseDOT{
    @SafeType({type:String})
    adress:string

    @SafeType({type:Number})
    rooms:number

    @SafeType({type:Number})
    bathrooms:number

    @SafeType({type:Number})
    pool: number

    @SafeType({type:Number})
    kitchen:number

    @SafeType({type:Number})
    parking:number

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
        this.adress= obj.adress,
        this.rooms =obj.rooms,
        this.bathrooms= obj.bathrooms,
        this.pool= obj.pool,
        this.kitchen= obj.kitchen,
        this.parking = obj.parking,
        this.title= obj.title,
        this.price=obj.price,
        this.year=obj.year,
        this.color=obj.color,
        this.userId=obj.userId
    }
}