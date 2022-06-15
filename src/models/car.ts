import { prop, getModelForClass } from "@typegoose/typegoose"



class Car {

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

    @prop({required:true})
    title: string

    @prop()
    price: number

    @prop()
    year: number

    @prop()
    color: string
    
}

export const CarModel = getModelForClass(Car)

