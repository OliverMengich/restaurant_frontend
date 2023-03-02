import {createSlice} from '@reduxjs/toolkit';
import {AppState} from './dishesSlice';
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
export const { setAuthState } = dishesSlice.actions;
export const selectAuthState=  (state: AppState)=>state.dishes.dishes
export default dishesSlice.reducer;