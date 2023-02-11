import { useState } from 'react';
// import React {useState} from 'react';
import DishesListComponent from '@/components/DishesList/DishesList.component';
import PageInfoComponent from '@/components/PageInfo/PageInfo.component';
type Dish={
    id: number,
    imageUrl: string ,
    name: string,
    price: number,
    description: string,
    rating: number
}
interface DishesPageProps{
    data: Dish[]
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
    const res = await fetch('https://lassiette-api.onrender.com/api/dishes');
    const {dishes} = await res.json();
    console.log(dishes);
    return {
        props: {
            data: dishes,
        },
    };
}
// pass dishes to DishesListComponent

export default Dishes;