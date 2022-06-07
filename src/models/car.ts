import { prop, getModelForClass } from "@typegoose/typegoose"


class Car {

    @prop()
    model:string

    @prop()
    year:number

    @prop()
    doors:number

    @prop()
    motor: string

    @prop()
    color:string

    @prop()
    typeCar:string

    @prop()
    wheel:number
    
}

export const CarModel = getModelForClass(Car)

export async function Add_Car() {
    const car = new CarModel({
        model: "Jeep",
        year: 2021,
        doors: 4,
        motor: "ZR3456",
        color: "Black",
        typeCar: "SUV",
        wheel: 4
    })
    await car.save();
}

Add_Car()