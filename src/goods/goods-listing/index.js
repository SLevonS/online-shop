import React from 'react';
import ProductItem from './ProductItem';
import classes from './index.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {addToCart, removeFromCart} from '../cart/actions';

const ProductListing = (props) => {
    return <div className={classes.ProductListing}>
            {
                props.products.map( (product, i ) =>
                    <ProductItem
                        key={i}
                        product={product}
                        addToCart={props.addToCart}
                        removeFromCart={props.removeFromCart}
                        cartItem={props.cart.filter(cartItem => cartItem.id ===product.id)[0]}
                    />)
            }
        </div>


};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

const mapActionToProps = (dispatch) => {
    return {
        addToCart: bindActionCreators(addToCart, dispatch),
        removeFromCart: bindActionCreators(removeFromCart, dispatch)
    }
};

// function mapActionToProps (dispatch){
//     return {
//         addToCart: (item) => {
//             dispatch({type:'ADD', payload: item})
//         },
//         removeFromCart: (item) => {
//             dispatch({type: 'REMOVE', payload: item})
//         }
//     }
// };
export default connect(mapStateToProps, mapActionToProps)(ProductListing)