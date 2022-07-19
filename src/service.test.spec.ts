import { Request, Response } from "express";
import carServiceMock from "./util/__mocks__/carService.mock";
import carController from "./controllers/carController";



describe("CarController", () => {
    test("Get All Car", () => {
        const req ={};
        let resposeObject = {};
        const res={
            JSON: jest.fn().mockImplementation((result)=>{
                resposeObject =  result;
            }),
        };

        const expectedResponse = [{
            "Result":"Get All Car",
            "userId":"62cc8dccbcc099dea11d704e",
            "title":"The best buy",
            "model":"Jeep Grangles",
            "doors":"4",
            "motor":"V8",
            "typeCar":"SVE",
            "wheel":"4",
            "price":30000,
            "year":2020,
            "color":"black"

        }];
        expect(carController.getAllCar(req,res)).toEqual(expectedResponse);

    })



});