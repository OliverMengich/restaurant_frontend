import React from 'react';
import roomStyles from './RoomList.module.css';
import Image, { StaticImageData } from 'next/image';
interface Room{
    id: number;
    imageUrl: string;
    roomNumber: number;
    roomType: string;
    price: number;
    roomStatus: boolean;
}
interface IRoomDetails {
    rooms: Room[]
}
function RoomListComponent({rooms}: IRoomDetails) {
    return (
        <>
            <div className={roomStyles["rooms-section"]}>
                <h1>Accommodation</h1>
                <div className={roomStyles["rooms-container"]}>
                    {rooms.map((room)=>{
                        return(
                            <div key={room.id} className={roomStyles["room"]}>
                                <Image src={room.imageUrl} alt="image1" width={300} height={300} />
                                <div className={roomStyles["room-info"]}>
                                    <h3 className={roomStyles["title"]}>{room.roomType}</h3>
                                    <p>${room.price}</p>
                                </div>
                                <button className={roomStyles["btn"]}>Book Now</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default RoomListComponent;