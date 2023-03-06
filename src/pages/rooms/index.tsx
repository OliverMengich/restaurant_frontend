import React from 'react';
import { IRoomDetails } from '@/components/RoomList/IRoomDetails';
import RoomListComponent from '@/components/RoomList/RoomList.component';
import CenterFindComponent from '@/components/CenterFind/CenterFind.component';
import FooterComponent from '@/components/footer/Footer.component';
function RoomPage({rooms}:{rooms:IRoomDetails[]}) {
    if (!rooms) {
        return(<h1>No Rooms Loaded...</h1>)
    }
    return (
        <div>
            <CenterFindComponent/>
            <RoomListComponent rooms={rooms} />
            <FooterComponent/>
        </div>
    );
}
export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/rooms");
    if (typeof res ==='undefined') {
        return{
            props:{
                rooms: null
            }
        }
    }
    const {rooms} = await res.json();
    return {
        props: {
            rooms: rooms as IRoomDetails,
        },
    };
}

export default RoomPage;