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
                    {
                        Object.keys(dishes).map((category,id) => (
                            <div key={id} className={id===2? categoriesListsStyles['selected-section'] : categoriesListsStyles.section}>
                                <DishesListComponent key={category} dishes={dishes} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default CategoriesComponent;