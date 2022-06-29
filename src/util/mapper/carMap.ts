import { Service } from "typedi";
import { CarDTO } from "../../dto/carDTO";
import { Car } from "../../models/Car";

@Service()
export class CarMap{

    mapEntityToDto(t:Car|null):CarDTO{
        const mapper = {
            model: t?.model,
            doors: t?.doors,
            motor: t?.motor,
            typeCar: t?.typeCar,
            wheel: t?.wheel,
            title: t?.title,
            price: t?.price,
            year: t?.year,
            color: t?.color,
            userId: t?.userId}
          

        const returnDto = new CarDTO(mapper)
         return returnDto;
    }

    mapJsonToEntity(t:CarDTO):CarDTO{
        const mapper = {
            model:t?.model,
            doors:t?.doors,
            typeCar:t?.typeCar,
            wheel:t?.wheel,
            title:t?.title,
            price:t?.price,
            year:t?.year,
            color: t?.color,
            userId:t?.userId
        }
        const retur = new CarDTO(mapper)
        return retur;
    }
}