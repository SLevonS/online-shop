import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.css';

const Navigation = (props) => <nav className={classes.nav}>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart</Link></li>
    </ul>
</nav>

export default Navigation;