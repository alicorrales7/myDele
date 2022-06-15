import { prop, getModelForClass } from "@typegoose/typegoose"
import { userModel } from "./User"


class Phone {

    @prop()
    model:number

    @prop()
    capacity: string

    @prop()
    ram:number

    @prop()
    connectity:string

    @prop({required:true})
    title: string

    @prop()
    price: number

    @prop()
    year: number

    @prop()
    color: string
    
}

export const phoneModel = getModelForClass(Phone)

export async function Add_Phone() {
    const phone = new phoneModel()
    
}


export async function Find_Phone() {

    const phone_search = await phoneModel.find()
    
    return phone_search;
}

export async function Update_Phone() {
    //find the user that has this id, and update this property
    const phone_findOneAndUpdate = await phoneModel.findByIdAndUpdate()       
}

export async function UpdateMany_Phone() {
    
    const phone_updateMany = await phoneModel.updateMany()
}

export async function Delete_Phone() {
    const phone_Delete = await phoneModel.findByIdAndRemove()
}




export async function insert_One() {
    const user = new userModel()
    
}