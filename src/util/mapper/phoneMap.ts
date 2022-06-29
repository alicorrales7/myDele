import { Service } from "typedi";
import { phoneDTO } from "../../dto/phoneDTO";
import { Phone } from "../../models/Phone";

@Service()
export class PhoneMap{

    mapEntityToDto(t:Phone|null):phoneDTO{
        const mapper = {
            model: t?.model,
            capacity: t?.capacity,
            ram: t?.ram,
            connectity: t?.connectity,
            title: t?.title,
            price: t?.price,
            year: t?.year,
            color: t?.color,
            userId: t?.userId}
          

        const returnDto = new phoneDTO(mapper)
         return returnDto;
    }

    mapJsonToEntity(t:phoneDTO):phoneDTO{
        const mapper = {
            model: t?.model,
            capacity: t?.capacity,
            ram: t?.ram,
            connectity: t?.connectity,
            title: t?.title,
            price: t?.price,
            year: t?.year,
            color: t?.color,
            userId: t?.userId
        }
        const retur = new phoneDTO(mapper)
        return retur;
    }
}