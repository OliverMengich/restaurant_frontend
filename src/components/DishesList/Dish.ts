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
    'Breakfast',
    'Lunch',
    'Dinner',
    'Snacks',
    'Drinks',
    'Desserts',
}
