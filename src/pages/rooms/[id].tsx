import React, { useState } from 'react';
import { IRoomDetails } from '@/components/RoomList/IRoomDetails';
import roomDescStyles from './RoomDesc.module.css';
import Image from 'next/image';
import { fetchRoomsId } from '../api/controllers/rooms.controllers';
import { GetStaticPropsContext } from 'next';
import RatingComponent from '@/components/RatingComponent/Rating.component';
interface Props {
    room: IRoomDetails
}
function RoomDetail({room}: Props) {
    function handleImageSwitch(imageUrl: string, e: React.MouseEvent<HTMLImageElement, MouseEvent>){
        setFirstImage(imageUrl)
    }
    const [firstImage,setFirstImage] = useState('')
    return (
        <div className={roomDescStyles["room-desc"]}>
            <div className={roomDescStyles["room-desc-img"]}>
                <div className={roomDescStyles["room_image"]}>
                    <Image
                        src={!firstImage? room.roomImage[0]: firstImage}
                        alt="a room"
                        width={700}
                        height={400}
                    />
                </div>
                <div className={roomDescStyles["room_otherImages"]}>
                    {
                        room.roomImage.map((img,i)=>{
                            return (
                                <Image key={i}
                                    onClick={(e)=>handleImageSwitch(img,e)}
                                    src={img}
                                    alt="image of room"
                                    width={100}
                                    height={100}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className={roomDescStyles["room-desc-info"]}>
                <div className={roomDescStyles["room_path"]}>
                    <p>
                        /<span>Home</span>/<span>rooms</span>/<span>room</span>
                    </p>
                </div>
                <h1>{room.roomType}</h1>
                <div className={roomDescStyles["rating"]}>
                    <div className={roomDescStyles.rating_stars}>
                        <RatingComponent rating={room.rating} />
                        ({room.rating} rating (100 reviews))
                    </div>
                </div>
                <h1 className={roomDescStyles.price}>${room.price} per night</h1>
                <h3>Description</h3>
                <p>
                    A classy room to spend  your nice with friends and family
                </p>
                <div className={roomDescStyles.room_features}>
                    <h3>Features</h3>
                    <div className={roomDescStyles.room_feature}>
                        <Image
                            src="/sleep.png"
                            alt="star"
                            width={30}
                            height={30}
                        />
                        <Image
                            src="/tv.png"
                            alt="star"
                            width={30}
                            height={30}
                        />
                        <Image
                            src="/meal.png"
                            alt="star"
                            width={30}
                            height={30}
                        />
                        <Image
                            src="/bath.png"
                            alt="star"
                            width={30}
                            height={30}
                        />
                    </div>
                </div>
                <div className={roomDescStyles.room_actions}>
                    <button className={roomDescStyles["bookroom_action-btn"]}>
                        Book Now
                        <Image
                            src="/lightning.png"
                            alt="star"
                            width={20}
                            height={20}
                        />
                    </button>
                    <button className={roomDescStyles["room_actions-btn"]}>
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/3737/3737372.png"
                            alt="star"
                            width={20}
                            height={20}
                        />
                        Add to Cart
                    </button>
                    <button className={roomDescStyles["wishlist_actions-btn"]}>
                        <Image
                            src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
                            alt="wishlist"
                            width={20}
                            height={20}
                        />
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
}
export async function getStaticPaths() {
    // const router = useRouter();
    // const roomdata = router.query;
    const rooms: {id: string}[] = await fetchRoomsId();
    return{
        fallback: false, // tells nextjs whether your path array contains all supported parameters value or some of them
        paths: rooms.map(({id})=>{
            return {
                params: {
                    id 
                } 
            }
        })
    }
}
// page is being generated during the build process.
export async function getStaticProps(context: GetStaticPropsContext) {
    const roomId = context.params?.id;
    const res = await fetch(`http://localhost:3000/api/rooms/${roomId}`);
    const {room} = await res.json();
    return {
        props: {
            room,
        },
    };
}
//how to generate definition file in typescript from terminal

export default RoomDetail;