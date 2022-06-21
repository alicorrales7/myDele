import { prop, getModelForClass, Ref } from "@typegoose/typegoose"
import { CarModel, Cars } from "./Car"


export class Users {

    @prop({ require: true })
    name: string

    @prop()
    sex: string

    @prop({ required: true })
    email: string

    @prop()
    phone: number

    @prop()
    adress: {
        'zip': number,
        "country": string,
        "location": string,
        "street": string,
        "number": number
    }

    @prop({ required: true })
    username: string

    @prop({ required: true, minlength: 8 })
    password: string

    @prop({ref: ()=> Cars })
    public product: Ref <Cars>[];


}

export const userModel = getModelForClass(Users)








