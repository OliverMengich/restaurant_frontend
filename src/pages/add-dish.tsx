import React,{useReducer} from 'react';
import AddDishComponent from '@/components/AddDishForm/AddDish.component';
import FooterComponent from '@/components/footer/Footer.component';
function Index() {
    const [formEls, setFormEls] = useReducer(e=>{
        title: ''
    })
    function onChange(e: unknown) {
        
    }
    function onSubmit() {
        // e.preventDefault();
    }
    return (
        <div style={{}}>
            <AddDishComponent onSubmit={onSubmit} onChange={onChange}/>
            <FooterComponent/>
        </div>
    );
}

export default Index;