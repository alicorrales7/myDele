import { app } from "../server";
import  express  from "express";
import Container from "typedi";
import CarController from "../controllers/carController";

export function carRoutes(){
    app.use(express.json())
   

    const carController = Container.get(CarController);

    app.get('/car', (req,res) => {
        const find = carController.getAllCars(res)
        console.log(find)
    })
    
    app.get('/car/:id', (req,res) => {
        const findOne = carController.getCar( req,res)    
    })

    app.post('/car', (req,res) => {
       const insert = carController.insertCar(req,res)
    })

    app.put('/car/:id', (req,res) => {
        const update = carController.updateCar(req,res);
        console.log("Edit Successful")
    })

    app.delete('/car/:id', (req,res) => {
        const deleteCar = carController.deleteCar(req,res)
        console.log("Delete Successful")
        
    })
}