import React from 'react';
import { IRoomDetails } from '@/components/RoomList/IRoomDetails';
import RoomListComponent from '@/components/RoomList/RoomList.component';
import CenterFindComponent from '@/components/CenterFind/CenterFind.component';
import FooterComponent from '@/components/footer/Footer.component';
import { getAllRooms } from '../api/controllers/rooms.controllers';
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
    
    const rooms = await getAllRooms();
    if (typeof rooms ==='undefined') {
        return{
            props:{
                rooms: null
            }
        }
    }
    return {
        props: {
            rooms: rooms as IRoomDetails,
        },
    };
}

export default RoomPage;