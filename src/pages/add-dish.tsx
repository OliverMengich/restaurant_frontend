import React,{useReducer} from 'react';
import AddDishComponent from '@/components/AddDishForm/AddDish.component';
import FooterComponent from '@/components/footer/Footer.component';
import { Category } from '@/components/DishesList/Dish';
interface FormComponents{
    title: string
    price: number
    category: Category | ''
    description: string
    imageUri: string
}
const formValues: FormComponents={
    category: '',
    imageUri:'',
    description: '',
    title: '',
    price: 0
}
type FormAction ={
    type: string
    payload: {name: string, value: string}
}
function formReducer(state:FormComponents, action: FormAction) {
    switch(action.type){
        case('UPDATE'):
            return {...state,[action.payload.name]: action.payload.value}
        default:
            return state
    }
}
function Index() {
    const [formEls, setFormEls] = useReducer(formReducer,formValues)
    function onChange(e: React.FormEvent<HTMLInputElement>) {
        let {name,value} = e.target as HTMLTextAreaElement
        setFormEls({type:'UPDATE',payload:{name: name,value:  value}})
    }
    const onSubmit =async (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        console.log(formEls);
        const res = await fetch('https://localhost:3000/api/dishes',{
            body: JSON.stringify(formEls),
            method: 'POST',
            
        })
    }
    return (
        <div style={{}}>
            <AddDishComponent onSubmit={onSubmit} onChange={onChange}/>
            <FooterComponent/>
        </div>
    );
}

export default Index;