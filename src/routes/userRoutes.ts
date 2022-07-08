import { app } from "../server";
import  express  from "express";
import Container from "typedi";
import UserController from "../controllers/userController";
import { logger } from "../util/logger"; 

export function userRoutes(){
    app.use(express.json())

    const userController = Container.get(UserController);

    app.get('/user', (req,res) => {
        const find = userController.getAllUsers(res)
        const logRoute = logger.info("Route tracking all get user")
        console.log(find)
    })

    app.get('/userproduct/:id', (req,res) => {
        const findProducts = userController.getAllProducts(req, res)
        const logRoute = logger.info("Route Tracking get all user products")
        console.log(findProducts)
    })

    app.get('/user/:id', (req,res) => {
        const findOne = userController.getUser( req,res)  
        const logRoute = logger.info("Route tracking get user")
    })
    
    app.post('/user', (req,res) => {
       const insert = userController.insertUsers(req,res)
       const logRoute = logger.info("Follow Route insert user")
    })

    app.put('/user/:id', (req,res) => {
        const update = userController.updateUser(req,res);
       const logRoute = logger.info("Follow Route edit user")
        console.log("Edit Successful")
    })

    app.delete('/user/:id', (req,res) => {
        const deleteUser = userController.deleteUser(req,res)
        const logRoute = logger.info("Follow Route delete user")
          console.log("Delete Successful")
        })
        

    

}