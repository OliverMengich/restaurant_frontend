import React from 'react';
import roomStyles from './RoomList.module.css';
import Image from 'next/image';
import Link from 'next/link';
interface Room{
    id: string;
    roomImage: string[] ;
    roomNumber: number;
    roomType: string;
    price: number;
    roomStatus: boolean;
    rating?: number;
    roomDescription: string
}
interface IRoomDetails {
    rooms: Room[]
}
let ratingArr = [5,3,5,2,6];
function RoomListComponent({rooms}: IRoomDetails) {
    return (
        <>
            <div className={roomStyles["rooms-section"]}>
                <h1>Accommodation</h1>
                <div className={roomStyles["rooms-container"]}>
                    {rooms.map((room)=>{
                        return (
                            <div key={room.id} className={roomStyles.room}>
                                <div className={roomStyles.roomImg}>
                                    <Image
                                        className={roomStyles.img}
                                        src={room.roomImage? room.roomImage[0]:''}
                                        alt="image1"
                                        width={300}
                                        height={300}
                                    />
                                    <div className={roomStyles["rating"]}>
                                        <h3>{room.roomType}</h3>
                                        {room.rating?(<div className={roomStyles.rating_stars}>
                                            {
                                                ratingArr.slice(0,room.rating).map((_,i)=>{
                                                    return (
                                                        <h3 key={i}>&#9733;</h3>
                                                    );
                                                })
                                            }{
                                                ratingArr.slice(room.rating,ratingArr.length).map((_,i)=>{
                                                    return (
                                                        <h3 key={i}>
                                                            &#9734;
                                                        </h3>
                                                    );
                                                })
                                            }
                                        </div>):''}
                                    </div>
                                </div>
                                <div className={roomStyles["room-info"]}>
                                    <div className={roomStyles["room-price"]}>
                                        <div className={roomStyles["title"]}>
                                            <Image
                                                src="/people.png"
                                                alt="star"
                                                width={20}
                                                height={20}
                                            />
                                            {room.roomNumber} guests
                                        </div>
                                        <p>${room.price}</p>
                                    </div>
                                    <p style={{ margin: "10px 0" }}>
                                        {room.roomDescription}
                                    </p>
                                    <button className={roomStyles["btn"]}>
                                        Book Now
                                    </button>
                                    <div className={roomStyles.room_features}>
                                        <div className={roomStyles.room_feature}>
                                            <Image
                                                src="/sleep.png"
                                                alt="star"
                                                width={30}
                                                height={30}
                                            />
                                            <Image
                                                src="/tv.png"
                                                alt="star"
                                                width={30}
                                                height={30}
                                            />
                                            <Image
                                                src="/meal.png"
                                                alt="star"
                                                width={30}
                                                height={30}
                                            />
                                            <Image
                                                src="/bath.png"
                                                alt="star"
                                                width={30}
                                                height={30}
                                            />
                                        </div>
                                        <p>
                                            <Link href={{
                                                pathname: `rooms/${room.id}`
                                                }}>Full Info &rarr;</Link>{" "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default RoomListComponent;