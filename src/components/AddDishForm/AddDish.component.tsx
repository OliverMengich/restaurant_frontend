import React from 'react';
import FormInput from '../Form-input/FormInput.component';
import FooterComponent from '../footer/Footer.component';
import Button from '../button/Button.component';
import addDishStyles from './AddDish.module.scss';
interface AddDishProps{
    onChange: (e: React.FormEvent<HTMLInputElement>)=> void
    onSubmit: (e: React.FormEvent<HTMLFormElement>)=> void
}
const AddDishComponent=({onChange, onSubmit}: AddDishProps) =>{
    return (
        <div className={addDishStyles['sign-up-container']}>
            <h2>Add a new Dish</h2>
            <form onSubmit={onSubmit}>
                <FormInput onChange={()=>onChange} label="Title" name='title' type='text' />
                <FormInput onChange={()=>onChange} label='Price' required name='price' type='number' />
                <FormInput onChange={()=>onChange} label='Category' required name='category' type='text' />
                <FormInput onChange={()=>onChange} label='Description' required name='description' type='text' />
                <FormInput onChange={()=>onChange} label='Image URI' required name='imageuri' type='text' />
                <Button type='submit' buttonType='google' >Add Dish</Button>
            </form>
            {/* <FooterComponent/> */}
        </div>
    );
}

export default AddDishComponent;