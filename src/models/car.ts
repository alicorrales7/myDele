import { prop, getModelForClass } from "@typegoose/typegoose"



export class Cars {

    @prop()
    model:string

    @prop()
    doors:number

    @prop()
    motor: string
    
    @prop()
    typeCar:string

    @prop()
    wheel:number

    @prop()
    title: string

    @prop()
    price: number

    @prop()
    year: number

    @prop()
    color: string

    @prop({required:true})
    userId: string

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

export const CarModel = getModelForClass(Cars)

