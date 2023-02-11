import React from 'react';
import categoriesListsStyles from './Categories.module.scss';
import DishItem from '../DishItem/DishItem.component';
import DishesListComponent from '../DishesList/DishesList.component';
import { Dish } from '../DishesList/Dish';
interface CategoriesProp{
    dishes: Dish[],
    buttonClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
function CategoriesComponent({dishes, buttonClick}:CategoriesProp ) {
    return (
        <div className={categoriesListsStyles.categories}>
            <div className={categoriesListsStyles.sections}>
                <button onClick={buttonClick} className={categoriesListsStyles["btn"]}>Snacks</button>
                <button className={categoriesListsStyles.btn}>Breakfast</button>
                <button className={categoriesListsStyles["selected"]}>Lunch</button>
                <button className={categoriesListsStyles.btn}>Dinner</button>
                <button className={categoriesListsStyles.btn}>Drinks</button>
                <button className={categoriesListsStyles.btn}>Desserts</button>
            </div>
            <div className={categoriesListsStyles.sections}>
                <div className={categoriesListsStyles.section}>
                    <DishesListComponent dishes={dishes}/>
                </div>
                <div className={categoriesListsStyles.section}>
                    <DishesListComponent dishes={dishes}/>
                </div>
                <div className={categoriesListsStyles["selected-section"]}>
                    <DishesListComponent dishes={dishes}/>
                </div>
                <div className={categoriesListsStyles.section}>
                    <DishesListComponent dishes={dishes}/>
                </div>
                <div className={categoriesListsStyles.section}>
                    <DishesListComponent dishes={dishes}/>
                </div>
            </div>
        </div>
    );
}

export default CategoriesComponent;