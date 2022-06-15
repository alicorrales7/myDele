import { app } from "../server";
import  express  from "express";
import Container from "typedi";
import HouseController from "../controllers/houseController";

export function houseRoutes(){
    app.use(express.json())
   

    const houseController = Container.get(HouseController);

    app.get('/house', (req,res) => {
        const find = houseController.getAllHouse(res)
        console.log(find)
        console.log('here')
    })
    
    app.get('/house/:id', (req,res) => {
        const findOne = houseController.getHouse( req,res)    
    })

    app.post('/house', (req,res) => {
       const insert = houseController.insertHouse(req,res)
    })

    app.put('/house/:id', (req,res) => {
        const update = houseController.insertHouse(req,res);
        console.log("Edit Successful")
    })

    app.delete('/house/:id', (req,res) => {
        const deleteHouse = houseController.deleteHouse(req,res)
        console.log("Delete Successful")
        
    })
}