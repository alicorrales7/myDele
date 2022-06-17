import { prop, getModelForClass } from "@typegoose/typegoose"
import { userModel } from "./User"


class Phones {

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

    @prop()
    username: string
    
}

export const phoneModel = getModelForClass(Phones)

