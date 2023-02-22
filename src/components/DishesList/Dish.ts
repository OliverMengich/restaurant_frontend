export interface Dish {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    description: string;
    rating: number;
    category: Category;
}
export enum Category{
    'Breakfast'=0,
    'Lunch'=1,
    'Dinner'=2,
    'Snacks'=3,
    'Drinks'=4,
    'Desserts'=5,
}
