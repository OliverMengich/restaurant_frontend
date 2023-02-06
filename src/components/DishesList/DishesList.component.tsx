import React from 'react';
import dishesListStyles from './DishesList.module.css';
import Image, { StaticImageData } from 'next/image';
interface Dish{
    id: number,
    imageUrl: string,
    name: string,
    price: number,
    description: string,
}
interface DishesListProps{
    dishes: Dish[]
}
function DishesListComponent({dishes}: DishesListProps) {
    return (
        <>
            <div className={dishesListStyles["dishes-section"]}>
                <h1>Highly Rated Dishes</h1>
                <div className={dishesListStyles["dishes-container"]}>
                    {dishes.map((dish) => (
                        <div key={dish.id} className={dishesListStyles["dish"]}>
                            <Image
                                src={dish.imageUrl}
                                alt="image1"
                                width={300}
                                height={300}
                            />
                            <div className={dishesListStyles["dish-info"]}>
                                <h3 className={dishesListStyles["title"]}>
                                    {dish.name}
                                </h3>
                                <p>${dish.price}</p>
                            </div>
                            <p>{dish.description}</p>
                            <div className={dishesListStyles.dishes_action}>
                                <button className={dishesListStyles.btn}>
                                    Order
                                </button>
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
                    ))}
                </div>
            </div>
        </>
    );
}

export default DishesListComponent;