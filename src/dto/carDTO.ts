import { Entity, SafeType } from "dto-mapping"
@Entity()
export class CarDTO{
    @SafeType({type:String})
    model:String

    @SafeType({type:Number})
    doors:Number

    @SafeType({type:String})
    motor: String

    @SafeType({type:String})
    typeCar:String

    @SafeType({type:Number})
    wheel:Number

    @SafeType({type:String})
    title: String

    @SafeType({type:Number})
    price: Number

    @SafeType({type:Number})
    year: Number

    @SafeType({type:String})
    color: String

    @SafeType({type:String})
    userId: String

    constructor(obj:any){
        this.model= obj.model,
        this.doors=obj.doors,
        this.motor=obj.motor,
        this.typeCar=obj.typeCar,
        this.wheel=obj.wheel,
        this.price=obj.price,
        this.year=obj.year,
        this.color=obj.color,
        this.userId=obj.userId
    }

    
}