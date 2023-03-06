import DishesListComponent from '@/components/DishesList/DishesList.component';
import PageInfoComponent from '@/components/PageInfo/PageInfo.component';
import FooterComponent from '@/components/footer/Footer.component';
import { Dish } from '@/components/DishesList/Dish';
import { getDishes } from '../api/controllers/dishes.controller';
interface DishesPageProps{
    data: {[key: string]: Dish[]}
}
function Dishes({ data}: DishesPageProps) {
    if (!data) {
        return(<h1>No Data Loaded...</h1>)
    }
    return (
        <div>
            <PageInfoComponent path='Dishes' title='Dishes Page'/>
            {
                ["Breakfast","Lunch","Dinner","Snacks","Drinks","Desserts"].map((category,i)=>{
                    return (
                        <div key={i}>
                            <h2 style={{textAlign: 'center'}}>{category}</h2>
                            <DishesListComponent category={category} dishes={data} />
                        </div>
                    )
                })
            }
            <FooterComponent/>
        </div>
    );
}
// fetch dishes from api
export async function getStaticProps() {
    let newDishes={};
    const dishes = await getDishes();
    for (const category of ["Breakfast","Lunch","Dinner","Snacks","Drinks","Desserts"]) {
        Object.assign(newDishes, {
            [category]: dishes.filter((dish: Dish) => dish.category === category),
        });
    }
    return {
        props: {
            data: newDishes,
        },
    };
}
export default Dishes;