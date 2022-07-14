import supertest from "supertest";
import { app } from "./server";



describe("Get /user", () => {
    test("should respond whit a 200 status code", async()=>{
        const response = await supertest(app).get("/user").send()
        expect(response.status).toBe(200)
    })
    test("should respond whit a Object pass a Id", async ()=>{
        const response = await supertest(app).get("/user/62c783796b50700661a36975").send()
        expect(response.body).toBeInstanceOf(Object);
    })
    test("should respond whit a Object in post", async ()=>{
        const response = await supertest(app).post("/user").send({
            "name": "Mario Corrales",
            "sex": "male",
            "email": "mariocm@gmail.com ",
            "phone": 7866144120,
            "adress": {
                "zip": 6001,
                "country": "MX",
                "location": {
                    "lat": 4234,
                    "log": 235235
                }
            },
            "username": "mcorrales",
            "password": "12345678",
            "productCars":[],
            "productHouses":[],
            "productPhones":[]
        })
        expect(response.body).toBeInstanceOf(Object);
    })
    test("should respond whit a Json User", async ()=>{
        const response = await supertest(app).get("/user/62c783796b50700661a36975").send()
        expect(response.body).toEqual({
            "name": "Ali Corrales",
            "sex": "male",
            "email": "alicorrales2013@gmail.com ",
            "phone": 7866144120,
            "username": "acorrales",
            "password": "12345678",
            "productCars": [
                [
                    "62c78cdcaf0a5a6a3e4f12c4"
                ],
                [
                    "62cdc81a44be0cf6b0c471c0"
                ]
            ],
            "productHouses": [
                [
                    "62c78ccaaf0a5a6a3e4f12c1"
                ]
            ],
            "productPhones": [
                [
                    "62c78391eede8731db557e30"
                ]
            ],
            "adrees": {
                "zip": 6001,
                "country": "MX",
                "location": {
                    "lat": 4234,
                    "log": 235235
                }
            }
        });
    })
})
