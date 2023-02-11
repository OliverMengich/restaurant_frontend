import PageInfoComponent from '@/components/PageInfo/PageInfo.component';
import RoomListComponent from '@/components/RoomList/RoomList.component';
import React from 'react';

function ConferenceRooms() {
    return (
        <div>
            <PageInfoComponent path='Conference Room' title='Conference Rooms' />
        </div>
    );
}
export default ConferenceRooms;
export async function getStaticProps() {
    const res = await fetch('https://lassiette-api.onrender.com/api/conference-rooms');
    const {rooms} = await res.json();
    console.log(rooms);
    return {
        props: {
            data: rooms,
        },
    };
}