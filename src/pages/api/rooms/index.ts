import { NextApiRequest, NextApiResponse } from "next";
import { getAllRooms } from "../controllers/rooms.controllers";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const rooms = await getAllRooms();
    return res.status(200).send(rooms)
}