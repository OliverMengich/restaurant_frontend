import React from 'react';
import dishesListStyles from './DishItem.module.scss';
import Image from 'next/image';
import RatingComponent from '../RatingComponent/Rating.component';
interface Dish{
    id: string,
    imageUrl: string,
    name: string,
    price: number,
    description: string,
    rating: number
    category: string
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
                    width={200}
                    height={200}
                />
                <h3 className={dishesListStyles["title"]}>
                    {dish.name}
                </h3>
                <RatingComponent rating={dish.rating} />
                <p>{dish.description.slice(0,50)}</p>
                
                <div className={dishesListStyles.dishes_action}>
                    <h3>${dish.price}</h3>
                    <button className={dishesListStyles["cart-btn"]}>
                        Add to Cart
                    </button>
                </div>
        </div>    
    );
}

export default DishItem;