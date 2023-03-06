import React from 'react';
import categoriesListsStyles from './Categories.module.scss';
import DishesListComponent from '../DishesList/DishesList.component';
import { Dish } from '../DishesList/Dish';
interface CategoriesProp{
    dishes: {[key: string]:Dish[]} ,
    buttonClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    selectedDish: string
}
function CategoriesComponent({dishes, buttonClick,selectedDish}:CategoriesProp ) {
    return (
        <div className={categoriesListsStyles.categories}>
            <div className={categoriesListsStyles.sections}>
                {
                    Object.keys(dishes).map((category,id) => (<button key={id} onClick={buttonClick} className={selectedDish===category? categoriesListsStyles['selected']:categoriesListsStyles["btn"]}>{category}</button>))
                }
            </div>
            <div className={categoriesListsStyles.sections}>
                {
                    Object.keys(dishes).map((category,id) => (
                        <div key={id} className={categoriesListsStyles[selectedDish===category? 'selected-section':'section']}>
                            <DishesListComponent category={category} key={category} dishes={dishes} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default CategoriesComponent;