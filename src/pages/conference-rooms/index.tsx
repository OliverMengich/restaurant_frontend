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
    const res = await fetch('http://localhost:3000/api/conference-rooms');
    const {conferenceRooms} = await res.json();
    console.log(conferenceRooms);
    
    return {
        props: {
            data: conferenceRooms,
        },
    };
}