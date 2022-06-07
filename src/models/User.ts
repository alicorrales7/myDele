import { prop, getModelForClass } from "@typegoose/typegoose"

class Users {

    @prop({require: true})
    name:string

    @prop()
    sex:string

    @prop({required:true})
    email: string

    @prop()
    phone: number

    @prop()
    adress:string

    @prop({required:true, minlength: 8})
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
        password: "12345678"
      })

      await user.save();
}
export async function Find_User(){
    //Find a user, 1st: Why do I have to search for it, 2nd: what to show from the search
     const users_find = await userModel.find({}, {_id:0, name:1});

     //Find the User that has this property "x"
     const user_findOne = await userModel.findOne({name: "Ali Corrales"});

     //Find the user with id ...
     const user_findByID = await userModel.findById("1242451515");

    
}

export async function Update_User() {
    //find the user that has this id, and update this property
    const user_findOneAndUpdate = await userModel.findByIdAndUpdate({_id:"144155436"},{name:"Julian Peres"}, {new:true} )
}

export async function Delete_User() {
    const user_Delete = await userModel.findByIdAndRemove("24325467537")
}


Add_User();
Find_User()