import React from 'react';
import dishesListStyles from './DishesList.module.css';
import Image, { StaticImageData } from 'next/image';
interface Dish{
    id: number,
    imageUrl: StaticImageData,
    name: string,
    price: number
}
interface DishesListProps{
    dishes: Dish[]
}
function DishesListComponent({dishes}: DishesListProps) {
    return (
        <>
            <div className={dishesListStyles["home-body-info"]}>
                <div style={{float: 'left'}}>
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
                        ,
                        <span style={{ color: "yellow" }}>Anne-Sophie Pic</span>{" "}
                        and Many More
                    </p>
                </div>
                <Image
                style={{borderRadius: '50%', float: 'right', border: '2px solid #fff'}}
                    src='/b1.jpg'
                    alt="image1"
                    width={300}
                    height={300}
                />
            </div>
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
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default DishesListComponent;