import { Service, Container } from "typedi";
import { userModel } from "../models/User";


@Service()
class UserRepository {
    
    
    async find(){
        const find = await userModel.find()
        return find;
    }

    //Resolve the id conversion
    async findById(id:string) {
        const convert = {"_id":id}
        const userfindById = await userModel.findById(convert);
        const iD = userfindById?._id
        const a = iD.toString()
        console.log(a + " aqui es la buena")
        return userfindById;
    }

    async findByIdProducts(id:string){
        const convert = {"_id":id}
        const findAllProduct = await userModel.findById(convert, 
            {product:true}).populate('productCars').populate('productHouses').populate('productPhones')
            
        return findAllProduct;
    }

    async insert(document: JSON) {
        const usersInserts = await userModel.insertMany(document);
        return usersInserts;
    }

    async update(id:string, document:JSON){
        const convert = {"_id":id}
        const userUbdate = await userModel.updateMany(convert,document);
        return userUbdate;
    }

    async delete(id:string) {
        const convert = {"_id":id}
        const userDelete = await userModel.deleteMany(convert);
        return userDelete;
    }
    }

    export default UserRepository;

    


