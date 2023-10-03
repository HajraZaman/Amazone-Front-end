import React from 'react'
import "./Product.css"
export default function ({title,image,price,rating}) {
  return (
    <div className='product'>
        <div className='pro-info'>
            <p>{title}</p>


            <div className='pro-price'>
                <small>$</small>
                <strong>{price}</strong>
            </div>

            <div className='pro-rating'>
              {Array(rating)
              .fill().map(( _ , i) => 
              (<p>⭐</p>))}
            </div>
        </div>
        <img src={image} alt= "Not found"></img>
        <button>Add to Basket</button>
    </div>
  )
}
