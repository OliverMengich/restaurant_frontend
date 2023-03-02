import { NextApiRequest, NextApiResponse } from "next";
import { createARoom } from "./controllers/rooms.controllers";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const newRoom = createARoom(req,res);
        console.log(newRoom);
        return res.status(200).send(newRoom);
    } catch (error) {
        return res.status(500).send({error})
    }
}