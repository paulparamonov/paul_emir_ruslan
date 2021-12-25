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
        <span className='s'>
        <div className='cart-payment-form' style={{marginTop:"25px"}}>
            <form onSubmit={sendForm}>
                <ul>
                    {cart.products?.map(value => <li>
                        <div className="product-card-table">
                            <img width={50} src={value.item.image1}/>  
                         
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

                    </span><img className='img1'
                    src="https://cdn3.iconfinder.com/data/icons/remixicon-logos/24/visa-fill-256.png"
                    alt=""
                  />
                  <img className='img1'src="https://cdn1.iconfinder.com/data/icons/picons-social/57/social_mastercard-512.png" alt="" />
                <span>
      
                            </span>
                            <br/>
                            <label>Name Surname</label>
                            <br/>
                    <input className='oplata subscribe__input'
                        placeholder="Name SurName"
                        type='text'
                        onChange={inputHandler('name')}
                        maxLength="20"
                        required="required" 
                     />
                    <br/>
                    <label>Card num</label>
                    <br/>
                    <input className='oplata subscribe__input'
                        placeholder="2345 1234 1234 1234"
                        type='number'
                        onChange={inputHandler('cardNumber')}
                        required="required" 
                     />
                    <br/>
                    <label>Card date</label>
                    <br/>
                    <input className='oplata subscribe__input'
                        placeholder="09/22"
                        type='number'
                        onChange={inputHandler('cardDate')}
                        required="required" 
                        maxLength="5"
                     />
                    <br/> 
                    <label>CVC</label> 
                    <br/>
                    <input className='oplata subscribe__input'
                        placeholder="555"
                        type='number'
                        onChange={inputHandler('cardCVC')}
                        required="required" 
                        maxLength="3"
                     />
                    <br/>  
                    <label>Phone number</label>  
                    <br/>  
                    <input className='oplata subscribe__input'
                        placeholder="+996555125125"
                        type='tel'
                        onChange={inputHandler('number')}
                        required="required" 
                        maxLength="14"
                     />
                    <br/>
                    <label>Adress</label>
                    <br/>
                    <input className='oplata subscribe__input'
                        placeholder="Bishkek.6.13" 
                        type='text'
                        onChange={inputHandler('address')}
                        required="required" 
                        />
                </div>
                
                <button  className='oplata subscribe__btn' type="submit" style={{marginTop:"10px"}}>Pay</button>
            </form>
        </div>
        </span>
    );
};

export default Payment;