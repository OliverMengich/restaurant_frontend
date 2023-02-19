import { type } from "os"

enum UserType{
    ADMIN,
    USER
}
enum DishesCategory{
    'Breakfast',
    'Lunch',
    'Dinner',
    'Snacks',
    'Drinks',
    'Desserts',
}
export interface Customer{
    customer_id: string
    firstName: string
    lastName: string
    birthday: Date
    email: string
    phone: string
    password: string
    userType: UserType
}
export type CustomerOutput= Omit<Customer, "password" | "userType">
export interface Dish{
    id: string
    name: string
    price: string
    imageUrl: string
    description: string
    category: DishesCategory
    featured: boolean
    rating: number
    createdAt: string
    updatedAt: string
}
export type DishOutput = Omit<Dish, 'createdAt'| 'updatedAt'>
