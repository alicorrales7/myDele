import { prop, getModelForClass } from "@typegoose/typegoose"



export class Phone {

    @prop()
    model:number

    @prop()
    capacity: string

    @prop()
    ram:number

    @prop()
    connectity:string

    @prop({required:true})
    title: string

    @prop()
    price: number

    @prop()
    year: number

    @prop()
    color: string

    @prop({required:true})
    userId: string
    
}

export const phoneModel = getModelForClass(Phone)

