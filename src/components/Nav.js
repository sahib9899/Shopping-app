import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

const Nav = () => {
    return (
        <nav>
            <h3>Shopping Site</h3>
            <ul className='nav-links'>
                <Link to='/productList'> <li><h5>Items</h5></li> </Link>
                <Link to='/createProduct'> <li><h5>Add Item</h5></li> </Link>
                <Link to='/cart'> <li><h5>Cart</h5></li> </Link>
            </ul>
        </nav>
    )
}

export default Nav
