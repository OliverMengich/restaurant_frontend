import Head from 'next/head';
import RoomListComponent from '@/components/RoomList/RoomList.component';
import FooterComponent from '@/components/footer/Footer.component';
import Image from 'next/image';
import homeBodyStyles from '../styles/Home.module.css';
import CategoriesComponent from '@/components/Categories/Categories.component';
import { IRoomDetails } from '@/components/RoomList/IRoomDetails';
import { Dish } from '@/components/DishesList/Dish';
import { useState } from 'react';
interface HomeProps {
    dishes: {[key: string]: Dish[]};
    rooms: IRoomDetails[];
}
export default function Home({ dishes, rooms }: HomeProps) {
    const [selectedDish,setSelectedDish] = useState("Breakfast")
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>)=> {
        return setSelectedDish((e.target as HTMLButtonElement).innerHTML);
    }
    return (
      <>
          <Head>
              <title>L&apos;Assiette Restaurant</title>
              <meta name="description" content="Generated by create next app" />
              <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/chef_icon.png" />
          </Head>
            <div className={homeBodyStyles["home-body-info"]}>
                <div style={{ float: "left" }}>
                    <h1>
                        <span style={{ color: "yellow" }}>L&apos;Assiette</span>{" "}
                        Restaurant
                    </h1>
                    <p style={{ fontSize: "20px" }}>
                        Come taste the best Friench dishes from Quiche Lorraine,
                        Salmon en papillote Prepared by{" "}
                        <span style={{ color: "yellow" }}>
                            Chef Hélène Darrozet
                        </span>
                        ,<span style={{ color: "yellow" }}>Anne-Sophie Pic</span>{" "}
                        and Many More
                    </p>
                </div>
                <Image
                    src="/plate.png"
                    alt="image1"
                    width={300}
                    height={300}
                />
            </div>
          <CategoriesComponent selectedDish={selectedDish} buttonClick={handleButtonClick} dishes={dishes}/>
          <RoomListComponent rooms={rooms} />
          <FooterComponent />
      </>
    );
}
export async function getStaticProps() {
    let newDishes: { [key: string]: Dish[] } = {};
    const fourDishes = await fetch('http://localhost:3000/api/dishes');
    let {dishes}: {dishes: Dish[], status: string} = await fourDishes.json();
    for (const category of ["Breakfast","Lunch","Dinner","Snacks","Drinks","Desserts"]) {
        Object.assign(newDishes, {
            [category]: dishes.filter((dish: Dish) => dish.category === category),
        });
    }
    const fourRooms = await fetch('http://localhost:3000/api/rooms');
    let {rooms} = await fourRooms.json();
    return {
        props: {
            dishes: newDishes,
            rooms
        },
        revalidate: 10
    };
}