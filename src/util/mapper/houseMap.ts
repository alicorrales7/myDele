import { HouseDOT } from "../../dto/houseDTO";
import { House } from "../../models/house";
import { Service } from "typedi";


@Service()
export class HouseMap{

    mapEntityToDto(t:House|null):HouseDOT{
        const mapper = {
            adress: t?.adress,
            rooms: t?.rooms,
            bathrooms: t?.bathrooms,
            pool: t?.pool,
            kitchen: t?.kitchen,
            parking: t?.parking,
            title: t?.title,
            price: t?.price,
            year: t?.year,
            color: t?.color,
            userId: t?.userId
        }
        
        const returnDto = new HouseDOT(mapper)
         return returnDto;
    }
    
    mapJsonToEntity(t:HouseDOT):HouseDOT{
        const mapper = {
            adress: t?.adress,
            rooms: t?.rooms,
            bathrooms: t?.bathrooms,
            pool: t?.pool,
            kitchen: t?.kitchen,
            parking: t?.parking,
            title: t?.title,
            price: t?.price,
            year: t?.year,
            color: t?.color,
            userId: t?.userId
        }

        const retur = new HouseDOT(mapper)
        return retur;
    }
}