import { prop, getModelForClass } from "@typegoose/typegoose"



class Houses {

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

export const houseModel = getModelForClass(Houses)

