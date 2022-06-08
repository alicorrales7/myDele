import { prop, getModelForClass } from "@typegoose/typegoose"
import { Product } from "./product"


class house extends Product{

    @prop()
    adress:string

    @prop()
    rooms:number

    @prop()
    bathrooms:number

    @prop()
    pool: number

    @prop()
    kitchen:number

    @prop()
    parking:number
}

const houseModel = getModelForClass(house)

export async function Add_house() {
    const house = new houseModel({
        adrees : "6001 NW, 38 St Virginia Garden",
        rooms: 3,
        bathrooms: 2,
        pool: 1,
        kitchen:1,
        parking: 2,
        price: 500000
    }
    )
}

Add_house()