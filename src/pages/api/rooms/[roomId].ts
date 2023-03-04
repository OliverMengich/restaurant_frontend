import { NextApiRequest, NextApiResponse } from "next";
import { getARoom } from "../controllers/rooms.controllers";
interface RoomsResponse{
    status: "success" | "error"
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const room = await getARoom(req,res);
    return res.status(200).send(room)
}