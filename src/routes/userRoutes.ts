import { app } from "../server";
import morgan from "morgan";
import  express  from "express";
import Container, { Service } from "typedi";
import UserController from "../controllers/userController";
 

export function userRoutes(){
    app.use(express.json())
    app.use(morgan("dev"))

    const userController = Container.get(UserController);

    app.get('/user', (req,res) => {
        const find = userController.getAllUsers(res)
        console.log(find)
    })
    
    app.get('/user/:userId', (req,res) => {
        const findOne = userController.getUser( req,res)    
    })

    app.post('/user', (req,res) => {
       const insert = userController.insertUsers(req,res)
    })

    app.put('/user/:username', (req,res) => {
        const update = userController.updateUser(req,res);
        console.log("Edit Successful")
    })

    app.delete('/user/:username', (req,res) => {
        const deleteU = userController.deleteUser(req,res)
        console.log("Delete Successful")
        
    })

}