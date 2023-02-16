import React,{useReducer} from 'react';
import AddDishComponent from '@/components/AddDishForm/AddDish.component';
import FooterComponent from '@/components/footer/Footer.component';
function Index() {
    // const [formEls, setFormEls] = useReducer((prev,next)=>{
    //     return{...prev,...next}
    // },{})
    function onChange(e: React.FormEvent<HTMLInputElement>) {
        // setFormEls((prev)=>{
        //     return{...prev}
        // })
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