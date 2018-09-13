import React from 'react';
import Cartpage from '../goods/cart/index';
import classes from './index.css';

const Cart = (props) => {
    return <div className={classes.Cart}>
        <h3>Cart</h3>
        <Cartpage />
    </div>
};
export default Cart;