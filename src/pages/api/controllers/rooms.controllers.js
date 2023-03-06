import { getRooms, getRoomsId, createRoom, deleteRoom, getRoomById, updateRoom } from "../services/rooms.services.js";

export const getAllRooms = async () => {
    try {
        // if(req.query.limit){
        //     const rooms = await getRooms(req.query.limit);
        //     return JSON.parse(JSON.stringify(rooms))
        // }
        console.log("No limit passed");
        const rooms = await getRooms();
        return JSON.parse(JSON.stringify(rooms))
    } catch (error) {
        return JSON.parse('{"err":"Error Encounter"}')
    }
}
export const fetchRoomsId = async () => {
    try {
        const rooms = await getRoomsId();
        console.log('Controllers room ids',JSON.parse(rooms));
        return JSON.parse(rooms);
    } catch (error) {
        console.log('Error is: ',error)
        return JSON.stringify({ 
            error,
            status: 'failure'
        })
    }
}
// these routes are only accessible to the admin
export const createARoom = async (req, res) => {
    try {
        const room = await createRoom(req.body);
        return res.json({
            room,
            status: 'success'
        })
    } catch (error) {
        return res.status(500).json({ error })
    }
}
export const getARoom = async (req, res) => {
    try {
        const room = await getRoomById(req.query.roomId);
        console.log("room",room.toJSON());
        return res.json({
            room
        })
    } catch (error) {
        return res.status(500).json({ error })
    }
}
export const updateARoom = async (req, res) => {
    try {
        const room = await updateRoom(req.params.id, req.body);
        return res.json({
            room,
            status: 'success'
        })
    } catch (error) {
        return res.status(500).json({ error })
    }
}
export const deleteARoom = async (req, res) => {
    try {
        const res = await deleteRoom(req.params.id);
        return res.json(res)
    } catch (error) {
        return res.status(500).json({ error })
    }
}