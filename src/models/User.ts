import { prop, getModelForClass } from "@typegoose/typegoose"

class users {

    @prop()
    name:string

    @prop()
    sex:string

    @prop()
    email: string

    @prop()
    phone: number

    @prop()
    adress:string

    @prop()
    password:string
    
}

export const ModelUser = getModelForClass(users)