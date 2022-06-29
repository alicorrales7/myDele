import { prop, getModelForClass, Ref } from "@typegoose/typegoose"
import { Car } from "./Car";
import { House } from "./House";
import { Phone } from "./Phone";


export class User {

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

    @prop({ref: ()=> Car })
    public productCars: Ref <Car>[];

    @prop({ref: ()=> House })
    public productHouses: Ref <House>[];

    @prop({ref: ()=> Phone })
    public productPhones: Ref <Phone>[];


}

export const userModel = getModelForClass(User)








