import React from 'react';
import { IRoomDetails } from '@/components/RoomList/IRoomDetails';
import RoomListComponent from '@/components/RoomList/RoomList.component';
import CenterFindComponent from '@/components/CenterFind/CenterFind.component';
import FooterComponent from '@/components/footer/Footer.component';
import RoomItemComponent from '@/components/RoomItem/RoomItem.component';
import Link from 'next/link';
function RoomPage({rooms}:{rooms:IRoomDetails[]}) {
    return (
        <div>
            <CenterFindComponent/>
            <RoomListComponent rooms={rooms} />
            {/* <RoomItemComponent/> */}
            <FooterComponent/>
        </div>
    );
}
export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/rooms");
    const {rooms} = await res.json();
    return {
        props: {
            rooms: rooms as IRoomDetails,
        },
    };
}

export default RoomPage;