import React from 'react';
import { IRoomDetails } from '@/components/RoomList/IRoomDetails';
import RoomListComponent from '@/components/RoomList/RoomList.component';
import CenterFindComponent from '@/components/CenterFind/CenterFind.component';
import FooterComponent from '@/components/footer/Footer.component';
const ROOMS: IRoomDetails[] = [
    {
        id: 1,
        imageUrl:
            "https://i.pinimg.com/564x/bb/5b/c1/bb5bc13f084d668ad95f432efba0d97d.jpg",
        roomNumber: 100,
        roomType: "TWO ROOM",
        price: 150.99,
        roomStatus: true,
    },
    {
        id: 2,
        imageUrl:
            "https://i.pinimg.com/564x/5d/15/2b/5d152b2f20d9e1dc991b72d1be619cb4.jpg",
        roomNumber: 101,
        roomType: "SINGLE ROOM",
        price: 74.99,
        roomStatus: true,
    },
    {
        id: 3,
        imageUrl:
            "https://i.pinimg.com/564x/94/53/bd/9453bd6e4ea22a9eccb6c0410c788a31.jpg",
        roomNumber: 102,
        roomType: "TWO ROOM",
        price: 100,
        roomStatus: true,
    },
    {
        id: 4,
        imageUrl:
            "https://i.pinimg.com/564x/39/9d/f6/399df63697b22c507bbf1e9c4f2b9972.jpg",
        roomNumber: 103,
        roomType: "SINGLE ROOM",
        price: 90,
        roomStatus: true,
    },
    {
        id: 5,
        imageUrl:
            "https://i.pinimg.com/564x/39/9d/f6/399df63697b22c507bbf1e9c4f2b9972.jpg",
        roomNumber: 120,
        roomType: "SINGLE ROOM",
        price: 90,
        roomStatus: true,
    },
];
function RoomPage() {
    return (
        <div>
            <CenterFindComponent/>
            <RoomListComponent rooms={ROOMS} />
            <FooterComponent/>
        </div>
    );
}

export default RoomPage;