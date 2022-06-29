import { Entity,SafeType } from "dto-mapping"

@Entity()
export class UserDTO{
    @SafeType({type:String})
    name:string

    @SafeType({type:String})
    sex:string

    @SafeType({type:String})
    email:string

    @SafeType({type:Number})
    phone:number

    @SafeType({type:JSON})
    adress:{}

    @SafeType({type:String})
    username:string

    @SafeType({type:String})
    password:string

    @SafeType({type:Array})
    productCars: []

    @SafeType({type:Array})
    productHouses: []

    @SafeType({type:Array})
    productPhones: []

    constructor(obj:any){
        this.name = obj.name,
        this.sex = obj.sex,
        this.email = obj.email,
        this.phone = obj.number,
        this.adress = obj.adress,
        this.username = obj.username,
        this.password = obj.password,
        this.productCars = obj.productCars,
        this.productHouses = obj.productHouses,
        this.productPhones = obj.productPhones
    }
}