import { useState } from 'react';
// import React {useState} from 'react';
import DishesListComponent from '@/components/DishesList/DishesList.component';
type Dish={
    id: number,
    imageUrl: string ,
    name: string,
    price: number,
    description: string,
}
interface DishesPageProps{
    data: Dish[]
}
function Dishes({ data}: DishesPageProps) {
    const [mydish, setDishes] = useState(data);

    return (
        <div>
            <h1>Dishes Page</h1>
            <DishesListComponent dishes={mydish} />
        </div>
    );
}
// fetch dishes from api
export async function getStaticProps() {
    const res = await fetch('http://localhost:4000/api/dishes');
    const dishes = await res.json();
    return {
        props: {
            data: dishes,
        },
    };
}
// pass dishes to DishesListComponent

export default Dishes;