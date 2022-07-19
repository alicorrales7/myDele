import { json } from "stream/consumers";
import CarService from "../../services/carService";

   var getCar = jest.fn().mockReturnValue({    
    "userId":"62cc8dccbcc099dea11d704e",
   "title":"The best buy",
   "model":"Jeep Grangles",
   "doors":"4",
   "motor":"V8",
   "typeCar":"SVE",
   "wheel":"4",
   "price":30000,
   "year":2020,
   "color":"black"});
const carServiceMock= jest.mock('../../services/carService',()=>{
    return {
        getCar
 }
});

export default carServiceMock