import { getConferenceRooms, createConferenceRoom, deleteConferenceRoom,getConferenceRoomById, updateConferenceRoom } from "../services/conferenceRoom.services.js";

export const getAllConferenceRooms = async function(){
    try {
        const conferenceRooms = await getConferenceRooms();
        return JSON.parse(JSON.stringify(conferenceRooms))
    } catch (error) {
        console.log(error);
        return JSON.parse('{"err":"Error Encounter"}')
    }
}
//these routes are only accessible to admins
export const createAConferenceRoom = async function(req,res){
    try {
        const conferenceRoom = await createConferenceRoom(req.body);
        return res.json({
            conferenceRoom,
            status: 'success'
        })
    } catch (error) {
        return res.status(500).json({error: "Try Again"})
    }
}
export const getAConferenceRoom = async function(req,res){
    try {
        const conferenceRoom = await getConferenceRoomById(req.params.id);
        return res.json({
            conferenceRoom,
            status: 'success'
        })
    } catch (error) {
        return res.status(500).json({error})
    }
}
export const updateAConferenceRoom = async function(req,res){
    try {
        const conferenceRoom = await updateConferenceRoom(req.params.id,req.body);
        return res.json({
            conferenceRoom,
            status: 'success'
        })
    } catch (error) {
        return res.status(500).json({error})
    }
}
export const deleteAConferenceRoom = async function(req,res){
    try {
        const res = await deleteConferenceRoom(req.params.id);
        return res.json(res)
    } catch (error) {
        return res.status(500).json({error})
    }
}