import { app } from "../server";
import  express  from "express";
import Container from "typedi";
import PhoneController from "../controllers/phoneController";

export function phoneRoutes(){
    app.use(express.json())
   

    const phoneController = Container.get(PhoneController);

    app.get('/phone', (req,res) => {
        const find = phoneController.getAllPhone(res)
        console.log(find)
    })
    
    app.get('/phone/:id', (req,res) => {
        const findOne = phoneController.getPhone( req,res)    
    })

    app.post('/phone', (req,res) => {
       const insert = phoneController.insertPhone(req,res)
    })

    app.put('/phone/:id', (req,res) => {
        const update = phoneController.updatePhone(req,res);
        console.log("Edit Successful")
    })

    app.delete('/phone/:id', (req,res) => {
        const deletePhone = phoneController.deletePhone(req,res)
        console.log("Delete Successful")
        
    })
}