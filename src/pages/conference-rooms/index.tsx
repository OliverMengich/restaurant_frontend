import PageInfoComponent from '@/components/PageInfo/PageInfo.component';
import React from 'react';
interface ConferenceRoom{
    id: number;
    roomNumber: string;
    seats: number;
    imageUrl: string[];
    price: number;
    rating: number;
    createdAt: string;
    updatedAt: string;
}
interface ConferenceRoomsProps{
    data: ConferenceRoom[]
}
function ConferenceRooms({ data}: ConferenceRoomsProps) {
    if (!data) {
        return(<h1>No Conference Rooms Loaded..</h1>)
    }
    return (
        <div>
            <PageInfoComponent path='Conference Room' title='Conference Rooms' />
            {
                data.map((room, i) => {
                    return (
                        <div key={i}>
                            <h2>{room.roomNumber}</h2>
                            <p>{room.seats}</p>
                            <p>{room.price}</p>
                            <p>{room.rating}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default ConferenceRooms;
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/conference-rooms');
    const {conferenceRooms} = await res.json();
    return {
        props: {
            data: conferenceRooms,
        },
    };
}