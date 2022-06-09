import { prop, getModelForClass } from "@typegoose/typegoose"
import { userModel } from "./User"


class Phone {

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
    
}

export const phoneModel = getModelForClass(Phone)

export async function Add_Phone() {
    const phone = new phoneModel({
        model: "Iphone 13",
        year: 2022,
        color: "blue",
        capacity: "512 GB",
        ram: 6,
        connectity: "5G",
        price: 950

    })
    
}

Add_Phone()