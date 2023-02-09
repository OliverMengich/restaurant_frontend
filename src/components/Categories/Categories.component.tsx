import React from 'react';
import categoriesListsStyles from './Categories.module.scss';
import DishItem from '../DishItem/DishItem.component';
import DishesListComponent from '../DishesList/DishesList.component';
import { Dish } from '../DishesList/Dish';
interface CategoriesProp{
    dishes: Dish[]
}
function CategoriesComponent({dishes}:CategoriesProp ) {
    return (
        <div className={categoriesListsStyles.categories}>
            <div className={categoriesListsStyles.sections}>
                <div >
                    <button className={categoriesListsStyles["btn"]}>Snacks</button>
                    {/* <h1 className={categoriesListsStyles["section"]}>Hello world</h1> */}
                </div>
                <div>
                    <button className={categoriesListsStyles.btn}>Breakfast</button>
                    <h1 className={categoriesListsStyles["section"]}>Hello world</h1>
                </div>
                <div >
                    <button className={categoriesListsStyles["selected"]}>Lunch</button>
                    <div className={categoriesListsStyles["selected-section"]}>
                        <DishesListComponent dishes={dishes} />
                    </div>
                </div>
                <div >
                    <button className={categoriesListsStyles.btn}>Dinner</button>
                    <h1 className={categoriesListsStyles.section}>Hello world</h1>
                </div>
                <div >
                    <button className={categoriesListsStyles.btn}>Drinks</button>
                    <h1 className={categoriesListsStyles.section}>Hello world</h1>
                </div>
            </div>
        </div>
    );
}

export default CategoriesComponent;