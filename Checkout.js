import React from 'react'
import "./Checkout.css";
export default function Checkout() {
  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img className = 'checkout-ad' src='ad.jpg'></img>
            <div>
                <h2 className='checkout-title'>
                    Your shopping Basket
                </h2>
            </div>
        </div>
        <div className='checkout-right'>
            <h1>Subtotal side</h1>

        </div>
      
    </div>


  )
}

