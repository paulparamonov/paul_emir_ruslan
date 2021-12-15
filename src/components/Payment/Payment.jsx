import React, {useState, useEffect, useContext} from 'react';
import { cartContext } from "../../contexts/cartContext";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from 'react-router-dom';
import CartItem from "../Cart/CartItem"
import "./Payment.css"
import Cart from '../Cart/Cart';

const Payment = () => {
    const { changeProductCount } = useContext(cartContext);
    

    const [form, setForm] = useState({})

    const navigate = useNavigate()

    const {cart, createPayment } = useContext(cartContext);

    const {user: {email}} = useAuth();

    useEffect(() => {
        setForm(prevstate => ({...prevstate, ...cart, email}))
    }, [cart, email])

    const inputHandler = name => ({target: {value}}) => {
        setForm(prevstate => ({...prevstate, [name]: value}))
    }

    const sendForm = (e) => {
        e.preventDefault();

        // json server send data 
        createPayment(form).then(() => {
            navigate('/')
        })
    } 

    return (
        <div className='cart-payment-form'>
            <form onSubmit={sendForm}>
                <ul>
                    {cart.products?.map(value => <li>
                        <div className="product-card-table">
                            <img width={50} src={value.item.image1}/>  
                            <span>
                            {value.item.brand}  
                            </span>
                            <span style={{textAlign: 'right'}}>
                                {  value.count  + "шт"}
                            </span>
                            <span style={{textAlign: 'right'}}>
                                {"цена: " + value.item.price + "$"}
                            </span>
                            <span style={{textAlign: 'right'}}>
                                {"всего:" + value.subPrice + "$"}
                            </span>
                            
                            
                        </div>
                    </li>)}
                </ul>

                <div>
                <span style={{textAlign: 'right'}}>
                {<h2>Total: {cart?.totalPrice}$</h2>}
                            </span>
                    <input 
                        placeholder="IVAN IVANOV"
                        type='text'
                        onChange={inputHandler('number')}
                        required
                     />
                    <br/>
                    <input 
                        placeholder="2345 1234 1234 1234"
                        type='number'
                        onChange={inputHandler('number')}
                        required
                     />
                    <br/>
                    <input 
                        placeholder="09/22"
                        type='text'
                        onChange={inputHandler('number')}
                        required
                     />
                    <br/>  
                    <input 
                        placeholder="CVC"
                        type='number'
                        onChange={inputHandler('number')}
                        required
                     />
                    <br/>      
                    <input 
                        placeholder="tel number"
                        type='tel'
                        onChange={inputHandler('number')}
                        required
                     />
                    <br/>
                    <input 
                        placeholder="address" 
                        type='text'
                        onChange={inputHandler('address')}
                        required
                        />
                </div>
                
                <button  type="submit">Оплатить</button>
            </form>
        </div>
    );
};

export default Payment;