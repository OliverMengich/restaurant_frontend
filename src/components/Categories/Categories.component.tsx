import React from 'react';
import categoriesListsStyles from './Categories.module.scss';
import DishesListComponent from '../DishesList/DishesList.component';
import { Dish } from '../DishesList/Dish';
interface CategoriesProp{
    dishes: {[key: string]:Dish[]},
    buttonClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
function CategoriesComponent({dishes, buttonClick}:CategoriesProp ) {
    return (
        <div className={categoriesListsStyles.categories}>
            <div className={categoriesListsStyles.sections}>
                {
                    Object.keys(dishes).map((category,id) => (<button key={id} onClick={buttonClick} className={id===2? categoriesListsStyles['selected']:categoriesListsStyles["btn"]}>{category}</button>))
                }
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