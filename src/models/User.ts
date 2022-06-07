import { prop, getModelForClass } from "@typegoose/typegoose"

class Users {

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

const userModel = getModelForClass(Users)

export async function Add_User() {
    const user = new userModel ({
        name: "Ali Corrales",
        sex: "male",
        email: "alicorrales2013@gmail.com ",
        phone: 7866144120,
        adress: "6001 NW, 38 St Virginia Garden",
        password: "12345"
      })

      await user.save();
}

Add_User()