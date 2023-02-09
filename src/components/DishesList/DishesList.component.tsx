import React from 'react';
import dishesListStyles from './DishesList.module.css';
import DishItem from '../DishItem/DishItem.component';
import CategoriesComponent from '../Categories/Categories.component';
import { Dish } from './Dish';
interface DishesListProps{
    dishes: Dish[]
}
function DishesListComponent({dishes}: DishesListProps) {
    return (
        <>
            <div className={dishesListStyles["dishes-section"]}>
                {/* <h1>Highly Rated Dishes</h1> */}
                {/* <CategoriesComponent dishes={dishes}/> */}
                <div className={dishesListStyles["dishes-container"]}>
                    {dishes.map((dish) => (
                        <DishItem key={dish.id} dish={dish} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default DishesListComponent;