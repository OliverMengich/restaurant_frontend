import React from 'react';
import dishesListStyles from './DishesList.module.css';
import DishItem from '../DishItem/DishItem.component';
// import CategoriesComponent from '../Categories/Categories.component';
import { Dish } from './Dish';
interface DishesListProps{
    dishes: {[key: string]:Dish[]}
}
function DishesListComponent({dishes}: DishesListProps) {
    return (
        <>
            <div className={dishesListStyles["dishes-section"]}>
                <div className={dishesListStyles["dishes-container"]}>
                    {
                        Object.keys(dishes).map((category) => (
                            <h2>{category}</h2> &&
                            dishes[category].map((dish) => (
                                <DishItem key={dish.id} dish={dish} />
                            ))
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default DishesListComponent;