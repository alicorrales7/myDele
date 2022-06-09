import { prop,getModelForClass } from "@typegoose/typegoose";

export class Product{
    
    @prop({required:true})
    title: string

    @prop()
    price: number

    @prop()
    year: number

    @prop()
    color: string
}