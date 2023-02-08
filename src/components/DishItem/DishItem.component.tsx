import React from 'react';
import dishesListStyles from './DishesList.module.css';
import Image from 'next/image';
import RatingComponent from '../RatingComponent/Rating.component';
interface Dish{
    id: number,
    imageUrl: string,
    name: string,
    price: number,
    description: string,
    rating: number
}
interface DishItemProps{
    dish: Dish
}
let ratingArr: number[]=new Array(5).fill(0);
function DishItem({dish}: DishItemProps) {
    return (
            <div className={dishesListStyles["dish"]}>
                <Image
                    src={dish.imageUrl}
                    alt="image1"
                    width={100}
                    height={100}
                />
                <h3 className={dishesListStyles["title"]}>
                    {dish.name}
                </h3>
                <RatingComponent rating={dish.rating} />
                <p>{dish.description}</p>
                {/* <div className={dishesListStyles["dish-info"]}>
                    <h3 className={dishesListStyles["title"]}>
                        {dish.name}
                    </h3>
                    
                </div> */}
                <div className={dishesListStyles.dishes_action}>
                    {/* <button className={dishesListStyles.btn}>
                        Order
                    </button> */}
                    <p>${dish.price}</p>
                    <button className={dishesListStyles["cart-btn"]}>
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/3737/3737372.png"
                            alt="star"
                            width={20}
                            height={20}
                        />
                        Add to Cart
                    </button>
                </div>
        </div>    
    );
}

export default DishItem;