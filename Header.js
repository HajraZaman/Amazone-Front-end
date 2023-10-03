import React from 'react'
import './Header.css';
import Search from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='header'>

        <Link to = "/">
        
        <img className='header-logo' 
        src = "logo3.png" />
        
        </Link>


        {/*search bar section */}

        <div className='header-search'>
            <input className='searchInput' type='text'/>
            <Search className ="header-searchIcon" />
        </div>

        { /* navbar section */}

        <div className='header-nav'>

            <div className='header-option'>
                <span className='header-LineOne'>
                    Hello Guest
                </span>
                <span className='header-LineTwo'>
                    Sign in
                </span>
                 
            </div>

            <div className='header-option'>
                <span className='header-LineOne'>
                    Returns
                </span>
                <span className='header-LineTwo'>
                    & Orders
                </span>
            </div>

            <div className='header-option'>
                <span className='header-LineOne'>
                    Your
                </span>
                <span className='header-LineTwo'>
                    Prime
                </span>  
            </div>

            <Link to= "/checkout">
            <div className='optionBasket'>
                <ShoppingBasketIcon/>
                <span className='basketCount'>0</span>

            </div>
            </Link>

        </div>
    </div>
  )
}
