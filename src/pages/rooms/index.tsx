import React from 'react';
import { IRoomDetails } from '@/components/RoomList/IRoomDetails';
import RoomListComponent from '@/components/RoomList/RoomList.component';
import CenterFindComponent from '@/components/CenterFind/CenterFind.component';
import FooterComponent from '@/components/footer/Footer.component';
import RoomItemComponent from '@/components/RoomItem/RoomItem.component';
import Link from 'next/link';
const ROOMS: IRoomDetails[] = [
    {
        id: 1,
        imageUrl: ["https://i.pinimg.com/564x/bb/5b/c1/bb5bc13f084d668ad95f432efba0d97d.jpg","https://demo.w3layouts.com/demos_new/template_demo/28-03-2020/hotels-liberty-demo_Free/1275019035/web/assets/images/blog2.jpg"],
        roomNumber: 100,
        roomType: "TWO ROOM",
        price: 150.99,
        roomStatus: true,
        rating: 5,
    },
    {
        id: 2,
        imageUrl: ["https://i.pinimg.com/564x/5d/15/2b/5d152b2f20d9e1dc991b72d1be619cb4.jpg","https://demo.w3layouts.com/demos_new/template_demo/28-03-2020/hotels-liberty-demo_Free/1275019035/web/assets/images/blog2.jpg"],
        roomNumber: 101,
        roomType: "SINGLE ROOM",
        price: 74.99,
        roomStatus: true,
        rating: 4.5,
    },
    {
        id: 3,
        imageUrl: ["https://i.pinimg.com/564x/5d/15/2b/5d152b2f20d9e1dc991b72d1be619cb4.jpg","https://demo.w3layouts.com/demos_new/template_demo/28-03-2020/hotels-liberty-demo_Free/1275019035/web/assets/images/blog2.jpg"],
        roomType: "TWO ROOM",
        price: 100,
        roomNumber: 105,
        roomStatus: true,
        rating: 4.3,
    },
    {
        id: 4,
        roomNumber: 102,
        imageUrl: ["https://i.pinimg.com/564x/39/9d/f6/399df63697b22c507bbf1e9c4f2b9972.jpg","https://demo.w3layouts.com/demos_new/template_demo/28-03-2020/hotels-liberty-demo_Free/1275019035/web/assets/images/blog2.jpg"],
        roomType: "SINGLE ROOM",
        price: 90,
        roomStatus: true,
        rating: 3.5,
    },
    {
        id: 5,
        imageUrl: ["https://i.pinimg.com/564x/39/9d/f6/399df63697b22c507bbf1e9c4f2b9972.jpg","https://demo.w3layouts.com/demos_new/template_demo/28-03-2020/hotels-liberty-demo_Free/1275019035/web/assets/images/blog2.jpg"],
        roomNumber: 120,
        roomType: "SINGLE ROOM",
        price: 90,
        roomStatus: true,
        rating: 4,
    },
];
function RoomPage() {
    return (
        <div>
            <CenterFindComponent/>
            <RoomListComponent rooms={ROOMS} />
            <RoomItemComponent/>
            <FooterComponent/>
        </div>
    );
}
// export async function getStaticProps() {
//     const res = await fetch("https://lassiette-api.onrender.com/api/rooms");
//     const {rooms} = await res.json();
//     console.log(rooms);
//     return {
//         props: {
//             rooms: rooms as IRoomDetails,
//         },
//     };
// }

// export default RoomPage;