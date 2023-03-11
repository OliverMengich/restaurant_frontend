import React from 'react';
import categoriesListsStyles from './Categories.module.scss';
import DishesListComponent from '../DishesList/DishesList.component';
import { Dish } from '../DishesList/Dish';
interface CategoriesProp{
    dishes: {[key: string]:Dish[]} ,
    buttonClick: (e: React.MouseEvent<HTMLButtonElement>| React.FormEvent<HTMLSelectElement>) => void
    selectedDish: string
}
function CategoriesComponent({dishes, buttonClick,selectedDish}:CategoriesProp ) {
    return (
        <div className={categoriesListsStyles.categories}>
            <div className={categoriesListsStyles.sections}>
                <h1 className={categoriesListsStyles.popular_txt}>Popular Dishes</h1>
                {
                    Object.keys(dishes).map((category,id) => (<button key={id} onClick={buttonClick} className={selectedDish===category? categoriesListsStyles['selected']:categoriesListsStyles["btn"]}>{category}</button>))
                }
                <select onChange={buttonClick} className={categoriesListsStyles.select} id="cars">
                    {
                        Object.keys(dishes).map((category,id) => (<option key={id} value={category}>{category}</option>))
                    }
                </select>
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