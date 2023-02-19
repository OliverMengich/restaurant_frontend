import { useState } from 'react';
// import React {useState} from 'react';
import DishesListComponent from '@/components/DishesList/DishesList.component';
import PageInfoComponent from '@/components/PageInfo/PageInfo.component';
enum Category{
    'Breakfast',
    'Lunch',
    'Dinner',
    'Snacks',
    'Drinks',
    'Desserts',
}
type Dish={
    id: number,
    imageUrl: string ,
    name: string,
    price: number,
    description: string,
    rating: number,
    category: Category
}

interface DishesPageProps{
    data: {[key: string]:Dish[]}
}
function Dishes({ data}: DishesPageProps) {
    const [mydish, setDishes] = useState(data);

    return (
        <div>
            {/* <h1>Dishes Page</h1> */}
            <PageInfoComponent path='Dishes' title='Dishes Page'/> 
            <DishesListComponent dishes={mydish} />
        </div>
    );
}
// fetch dishes from api
export async function getStaticProps() {
    let newDishes={};
    const res = await fetch('/api/dishes');
    let {dishes} = await res.json();
    for (const category of Object.keys(Category)) {
        Object.assign(newDishes, {
            [category]: dishes.filter((dish: Dish) => dish.category === Category[category as keyof typeof Category]),
        });
    }
    console.log(newDishes);
    return {
        props: {
            data: newDishes,
        },
    };
}
// pass dishes to DishesListComponent

export default Dishes;