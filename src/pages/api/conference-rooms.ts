import { NextApiRequest, NextApiResponse } from "next";
import { getAllConferenceRooms,createAConferenceRoom,deleteAConferenceRoom,getAConferenceRoom,updateAConferenceRoom } from "./controllers/conferenceRooms.controllers";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    const method = req.method;
    switch (method) {
        case 'GET':
            const conferenceRooms = await getAllConferenceRooms(req,res);
            console.log(conferenceRooms);
            
            res.status(200).send(conferenceRooms);
            break;
        case 'POST':
            const newConferenceRoom = await createAConferenceRoom(req,res);
            console.log(newConferenceRoom);
            res.status(200).send(newConferenceRoom);
            break;
        case 'DELETE':
            const deletedConferenceRoom = await deleteAConferenceRoom(req,res);
            console.log(deletedConferenceRoom);
            res.send(deletedConferenceRoom)
            break;
        default:
            res.status(405).end("Method not allowed")
            break;
    }
    
}