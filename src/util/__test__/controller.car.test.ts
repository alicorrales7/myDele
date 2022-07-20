import CarController from "../../controllers/carController";
import carService from "../../services/carService";
jest.mock('../../services/carService');


it('should create a car controllers constructor', () => {
    const carController = new CarController(carService);

})