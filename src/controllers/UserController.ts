import { ModelUser } from "../models/User";

export async function SyncDB() {
    const user = new ModelUser ({
        name: "Ali Corrales",
        sex: "male",
        email: "alicorrales2013@gmail.com ",
        phone: 7866144120,
        adress: "6001 NW, 38 St Virginia Garden",
        password: "12345"
      })

      await user.save();
}
