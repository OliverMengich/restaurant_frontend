import { NextApiRequest, NextApiResponse } from "next";
import { getAllRooms } from "./controllers/rooms.controllers";
interface RoomsResponse{
    status: "success" | "error"
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const rooms = await getAllRooms(req,res);
    console.log(rooms);
    return res.status(200).send(rooms)
}