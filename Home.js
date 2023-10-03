import React from 'react'
import "./Home.css";
import Product from './Product';
export default function Home() {
  return (
    <div className='Home'>
        <div className='home-container'>
            <img className="home-image" 
            src='banner.jpg' alt='Not found'></img>

            <div className='home-row'>
              <Product
              title="The Leon Startup: How Constant Innovation Craetes Radically Successfull Bussinesses Paperback" 
              price={29.99}
              image="heater.jpg"
              rating= {5}/>
              <Product
               title="Knwood Kmix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and whisk" 
               price={29.99}
               image="mixer.avif"
               rating= {5}/>
           
            </div>
            <div className='home-row'>
              <Product
              title = "Samsung Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image = "watch.jpg"/>
              <Product
              title = "Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcol Fabric"
              price={98.99}
              rating={5}
              image = "speaker.jpg"/>
              <Product
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image = "ipad.jpg"/>
           
            </div>
            <div className='home-row'>
              <Product
              title = "Samsung Curved LED Gaming Monitor"
              price={1094.98}
              rating={5}
              image = "led.jpg"/>
            </div>
            

            


    
        </div>
    </div>
  )
}

