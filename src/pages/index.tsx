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
const DISHES:{id: number, imageUrl: string, name: string, price: number, description: string, rating: number}[] = [
  	{
		id: 1,
		imageUrl: image11.src,
		name:'Beef Stew',
		price: 5.99,
        rating: 4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl lacinia nisl, vel aliquet nunc nisl vel nisl.'
  	},
  	{
		id: 2,
		imageUrl: image12.src,
		name:'Carrot Fries',
		price: 4.99,
        rating: 4,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl lacinia nisl, vel aliquet nunc nisl vel nisl.'
  	},
	{
		id: 3,
		imageUrl: image13.src,
		name:'Fried Bananas',
		price: 2.99,
        rating: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl lacinia nisl, vel aliquet nunc nisl vel nisl.'
	},
	{
		id: 4,
		imageUrl: image14.src,
		name:'Grilled Meat',
		price: 9.99,
        rating: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl lacinia nisl, vel aliquet nunc nisl vel nisl.'
	}
]
const ROOMS = [
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
        imageUrl: "https://i.pinimg.com/564x/39/9d/f6/399df63697b22c507bbf1e9c4f2b9972.jpg",
        roomNumber: 103,
        roomType: "SINGLE ROOM",
        price: 90,
        roomStatus: true,
    },
];
export default function Home() {
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
          <CategoriesComponent dishes={DISHES}/>
          <RoomListComponent rooms={ROOMS} />
          <FooterComponent />
      </>
  );
}
