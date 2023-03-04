import {createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import { Dish } from '@/pages/api/typeDefs';

export interface DishesState{
    dishes: {[key: string]: Dish[]}
}
const initialState: DishesState = {
    dishes: {'':[]}
}
export const dishesSlice = createSlice({
    name: 'dishes',
    initialState,
    reducers:{
        setDishesState(state, action){
            state.dishes = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action)=>{
            return {
                ...state,
                ...action.payload.auth
            }
        }
    },
});