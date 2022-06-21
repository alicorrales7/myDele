import { prop, getModelForClass } from "@typegoose/typegoose"



export class Houses {

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

    @prop({required:true})
    userId: string
}

export const houseModel = getModelForClass(Houses)

