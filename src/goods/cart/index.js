import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {addToCart, removeFromCart, removeAllFromCart} from "./actions";

const sort = (item) => {
    return item.sort((a, b) => a.id > b.id);
};

const Cartpage = (props) => {
    return <table>
        <thead>
        <tr>
            <th>Item</th>
            <th>Quantity</th>
        </tr>
        </thead>
        <tbody>
        {
            sort(props.cart).map(item => <tr>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>
                    <button
                      onClick={(e) => props.addToCart(item)}
                    >+</button>
                </td>
                <td>
                    <button
                        onClick={(e) => props.removeFromCart(item)}
                    >-</button>
                </td>
                <td>
                    <button
                        onClick={(e) => props.removeAllFromCart(item)}
                    >Remove All</button>
                </td>
            </tr>)
        }
        </tbody>
    </table>
}

const mapstateToProps = (state) => {
    return {
        cart: state.cart
    }
};
const mapActionsToProps = (dispatch) => {
    return{
        addToCart: bindActionCreators(addToCart, dispatch),
        removeFromCart: bindActionCreators(removeFromCart, dispatch),
        removeAllFromCart: bindActionCreators(removeAllFromCart, dispatch),
    }
}
export default connect(mapstateToProps, mapActionsToProps)(Cartpage);
