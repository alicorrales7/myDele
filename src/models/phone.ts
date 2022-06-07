import { prop, getModelForClass } from "@typegoose/typegoose"



class Phone {

    @prop()
    model:number

    @prop()
    year:number

    @prop()
    color:string

    @prop()
    capacity: string

    @prop()
    ram:number

    @prop()
    connectity:string
    
}

export const phoneModel = getModelForClass(Phone)

export async function Add_Phone() {
    const phone = new phoneModel({
        model: "Iphone 13",
        year: 2022,
        color: "blue",
        capacity: "512 GB",
        ram: 6,
        connectity: "5G"

    })
    
}

Add_Phone()