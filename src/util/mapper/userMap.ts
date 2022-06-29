import { Service } from "typedi";
import { UserDTO } from "../../dto/userDTO";
import { User } from "../../models/User";

@Service()
export class UserMap{

    mapEntityToDto(t:User|null):UserDTO{
        const mapper = {
            name: t?.name,
            sex: t?.sex,
            phone: t?.phone,
            email: t?.email,
            adrees: t?.adress,
            username: t?.username,
            password: t?.password,
            productCars: t?.productCars,
            productHouses: t?.productHouses,
            productPhones: t?.productPhones}
          

        const returnDto = new UserDTO(mapper)
         return returnDto;
    }

    mapJsonToEntity(t:UserDTO):UserDTO{
        const mapper = {
            name: t?.name,
            sex: t?.sex,
            phone: t?.phone,
            email: t?.email,
            adrees: t?.adress,
            username: t?.username,
            password: t?.password,
            productCars: t?.productCars,
            productHouses: t?.productHouses,
            productPhones: t?.productPhones
        }
        const retur = new UserDTO(mapper)
        return retur;
    }
}