import { prop, getModelForClass, Ref } from "@typegoose/typegoose"
import { Car } from "./car";
import { House } from "./house";
import { Phone } from "./phone";
<<<<<<< HEAD
=======

>>>>>>> 7aa03c03296a3751dc43d639fe66420baa932b5e

export class User {

    @prop()
    name: string

    @prop()
    sex: string

    @prop()
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








