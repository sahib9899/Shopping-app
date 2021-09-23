import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import '../App.css';
import { useSelector } from 'react-redux';

const Nav = () => {

    const data = useSelector(state=>state.addcart);
    console.log('cartdata', data);
    return (
        <nav>
            <h3>Shopping Site</h3>
            <ul className='nav-links'>
                <Link to='/'> <li><Button variant='dark'>Items</Button></li> </Link>
                <Link to='/createProduct'> <li><Button variant='dark'>Add Item</Button></li> </Link>
                <Link to='/cart'> <li><Button variant='dark'>Cart</Button></li> </Link>
                <label><p style={{color:'black'}}>{data.length} Products in cart</p></label>
            </ul>
        </nav>
    )
}


export default Nav
