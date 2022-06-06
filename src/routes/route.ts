import { app } from "../server"

export const main =  () =>{
    app.get('/', (req,res) => {
    res.status(200).json({message:"Todo Correto"})
}) } 