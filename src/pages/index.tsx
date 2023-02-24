import Head from 'next/head';
import image11 from '../assets/m1.jpg'
import image12 from '../assets/m2.jpg'
import image13 from '../assets/m3.jpg'
import image14 from '../assets/m4.jpg';
import DishesListComponent from '@/components/DishesList/DishesList.component';
import RoomListComponent from '@/components/RoomList/RoomList.component';
import FooterComponent from '@/components/footer/Footer.component';
import Image from 'next/image';
import homeBodyStyles from '../styles/Home.module.css';
import CategoriesComponent from '@/components/Categories/Categories.component';
import { IRoomDetails } from '@/components/RoomList/IRoomDetails';
import { Category, Dish } from '@/components/DishesList/Dish';
import { useState } from 'react';
const DISHES:{id: number, imageUrl: string, name: string, price: number, description: string, rating: number, category: Category}[] = [
  	{
		id: 1,
		imageUrl: 'https://pngimg.com/uploads/turkey_food/turkey_food_PNG2.png',
		name:'Beef Stew',
		price: 5.99,
        rating: 4,
        category: Category.Breakfast,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl lacinia nisl, vel aliquet nunc nisl vel nisl.'
  	},
  	{
		id: 2,
		imageUrl: "https://th.bing.com/th/id/R.acc50f9c1272cc7cd201f1638a64de15?rik=BafpBIY1EsK0rg&riu=http%3a%2f%2fpngimg.com%2fuploads%2fturkey_food%2fturkey_food_PNG1.png&ehk=oYRTgwR1nB11822fb1CkJS9oFCIujCDy841D1koY7Ww%3d&risl=&pid=ImgRaw&r=0",
		name:'Carrot Fries',
		price: 4.99,
        rating: 4,
        category: Category.Snacks,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl lacinia nisl, vel aliquet nunc nisl vel nisl.'
  	},
	{
		id: 3,
		imageUrl: image13.src,
		name:'Fried Bananas',
		price: 2.99,
        rating: 5,
        category: Category.Desserts,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl lacinia nisl, vel aliquet nunc nisl vel nisl.'
	},
	{
		id: 4,
		imageUrl: "https://th.bing.com/th/id/R.62deafa7b1ef7c13ade024cb6149e498?rik=ff98YApwm3%2ft1g&riu=http%3a%2f%2fpngimg.com%2fuploads%2fturkey_food%2fturkey_food_PNG27.png&ehk=2GY2xpfjSHWWYNsRp4nLRaW0h1fUT8C0rO9RBMtw2L4%3d&risl=&pid=ImgRaw&r=0",
		name:'Grilled Meat',
		price: 9.99,
        rating: 3,
        category: Category.Dinner,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl lacinia nisl, vel aliquet nunc nisl vel nisl.'
	}
]
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
        imageUrl: ["https://i.pinimg.com/564x/39/9d/f6/399df63697b22c507bbf1e9c4f2b9972.jpg","https://demo.w3layouts.com/demos_new/template_demo/28-03-2020/hotels-liberty-demo_Free/1275019035/web/assets/images/blog1.jpg"],
        roomType: "SINGLE ROOM",
        price: 90,
        roomStatus: true,
        rating: 3.5,
    },
    {
        id: 5,
        imageUrl: ["https://i.pinimg.com/564x/39/9d/f6/399df63697b22c507bbf1e9c4f2b9972.jpg","https://demo.w3layouts.com/demos_new/template_demo/28-03-2020/hotels-liberty-demo_Free/1275019035/web/assets/images/blog1.jpg"],
        roomNumber: 120,
        roomType: "SINGLE ROOM",
        price: 90,
        roomStatus: true,
        rating: 4,
    },
];
interface HomeProps {
    dishes: {[key: string]: Dish[]};
    rooms: IRoomDetails[];
}
export default function Home({ dishes, rooms }: HomeProps) {
    const [selectedDish,setSelectedDish] = useState("Desserts")
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
          {/* <h1>Hello World</h1> */}
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
                    // style={{borderRadius: '50%', float: 'right', border: '2px solid #fff'}}
                    src="/plate.png"
                    alt="image1"
                    width={300}
                    height={300}
                />
            </div>
          {/* <DishesListComponent dishes={DISHES} /> */}
          <CategoriesComponent selectedDish={selectedDish} buttonClick={handleButtonClick} dishes={dishes}/>
          <RoomListComponent rooms={rooms} />
          <FooterComponent />
      </>
    );
}
export async function getStaticProps() {
    let newDishes: { [key: string]: Dish[] } = {};
    const fourDishes = await fetch('http://localhost:3000/api/dishes');
    let {dishes} = await fourDishes.json();
    for (const category of ["Breakfast","Lunch","Dinner","Snacks","Drinks","Desserts"]) {
        Object.assign(newDishes, {
            [category]: dishes.filter((dish: Dish) => dish.category === Category[category as keyof typeof Category]),
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