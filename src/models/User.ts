import { prop, getModelForClass, Ref } from "@typegoose/typegoose"
import { Product } from "./product"

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
        "location": {
            lat: number,
            log: number
        }
    }

    @prop({ required: true, minlength: 8 })
    password: string

    @prop({ required: true })
    product: []




}

const userModel = getModelForClass(Users)

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
    //Find a user, 1st: Why do I have to search for it, 2nd: what to show from the search
    //const users_find = await userModel.find({}, { _id: 0, name: 1 });

    //Find the User that has this property "x"
    //const user_findOne = await userModel.findOne({ name: "Ali Corrales" });

    //Find the user with id ...
    //  const user_findByID = await userModel.findById("1242451515");

    const busqueda = await userModel.find({}, {_id:true})
    
    return busqueda;
}

export async function Update_User() {
    //find the user that has this id, and update this property
    const user_findOneAndUpdate = await userModel.findByIdAndUpdate({ _id: "144155436" }, { name: "Julian Peres" }, { new: true })
}

export async function UpdateMany_User() {
    const busqueda = await userModel.find({}, {_id:true})
    let array:object[] = [];
    array.push(busqueda)
    array.push(busqueda)
    console.log(array)

    
    

    const user_updateMany = await userModel.updateMany({
        phone: { $exists: true }
    }, {
        $set: {
            'adress.location': { 'lat': 4234, 'log': 235235, 'casa': "blanca" },
            product : array
        }
    }
    )
}

export async function Delete_User() {
    const user_Delete = await userModel.findByIdAndRemove("24325467537")
}

UpdateMany_User()


export async function insert_One() {
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
    const insert = await userModel.insertMany(user)
    console.log(insert)
}