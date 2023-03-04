
import React from 'react';
import { IRoomDetails } from '@/components/RoomList/IRoomDetails';
import roomDescStyles from './RoomDesc.module.css';
import Image from 'next/image';
interface Props {
    room: IRoomDetails,
    handleImageSwitch: (img: string,e: React.MouseEvent<HTMLImageElement>)=>void
}
function RoomItemComponent({room, handleImageSwitch}: Props) {
    return (
        <div className={roomDescStyles["room-desc"]}>
            <div className={roomDescStyles["room-desc-img"]}>
                <div className={roomDescStyles["room_image"]}>
                    <Image
                        src={room.roomImage[0]}
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
                                    alt="hello image"
                                    width={100}
                                    height={100}
                                />
                            )
                        })
                    }
                    <Image
                        onClick={e => handleImageSwitch('https://demo.w3layouts.com/demos_new/template_demo/28-03-2020/hotels-liberty-demo_Free/1275019035/web/assets/images/blog2.jpg', e)}
                        src="https://demo.w3layouts.com/demos_new/template_demo/28-03-2020/hotels-liberty-demo_Free/1275019035/web/assets/images/blog2.jpg"
                        alt="a room"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="https://demo.w3layouts.com/demos_new/template_demo/28-03-2020/hotels-liberty-demo_Free/1275019035/web/assets/images/blog1.jpg"
                        alt="a room"
                        width={100}
                        height={100}
                    />
                    <Image
                        src="https://i.pinimg.com/564x/bb/5b/c1/bb5bc13f084d668ad95f432efba0d97d.jpg"
                        alt="a room"
                        width={100}
                        height={100}
                    />
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
                        <Image
                            src="/yellow_star.png"
                            alt="star"
                            width={20}
                            height={20}
                        />
                        <Image
                            src="/yellow_star.png"
                            alt="star"
                            width={20}
                            height={20}
                        />
                        <Image
                            src="/yellow_star.png"
                            alt="star"
                            width={20}
                            height={20}
                        />
                        <Image
                            src="/yellow_star_half.png"
                            alt="star"
                            width={20}
                            height={20}
                        />
                        (4.5 rating (100 reviews))
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

export default RoomItemComponent;