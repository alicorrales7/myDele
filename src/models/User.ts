import { prop, getModelForClass, Ref } from "@typegoose/typegoose"


class Users {

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
        'zip': string,
        "country": string,
        "location": string,
        "street": string,
        "number": number
    }

    @prop({ required: true, minlength: 8 })
    password: string

    @prop({ required: true })
    product: [number]




}

export const userModel = getModelForClass(Users)

export async function Add_User() {
    const user = new userModel({
        name: "Ali Corrales",
        sex: "male",
        email: "alicorrales2013@gmail.com ",
        phone: 7866144120,
        password: "12345678",
        adress: {
            'zip': 6001,
            'country': 'MX',
            'location': { 'lat': 4234, 'log': 235235 }
        }
    })

    await user.save();
}
export async function Find_User() {

    const busqueda = await userModel.find()
    
    return busqueda;
}

export async function Update_User() {
    //find the user that has this id, and update this property
    const user_findOneAndUpdate = await userModel.findByIdAndUpdate()       
}

export async function UpdateMany_User() {
    
    const user_updateMany = await userModel.updateMany()
}

export async function Delete_User() {
    const user_Delete = await userModel.findByIdAndRemove()
}




export async function insert_One() {
    const user = new userModel()
    
}

