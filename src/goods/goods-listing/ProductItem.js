import React from 'react';
import classes from './ProductItem.css';

const ProductItem = (props) => {
    // const itemInCart = props.cart.filter(item => item.id === props.product.id)[0];

    // console.log( "itemInCart", itemInCart );
    return <div className={classes.ProductItem}>
        <h3>{props.product.name}</h3>
        <div className={classes.imageDiv}>
            <img src={`/products/${props.product.image}`}/>
        </div>
        <div>${props.product.price}</div>
        <div className={classes.btnAdd}>
            <button onClick={() => props.addToCart(props.product)}>Add to cart({
                (props.cartItem && props.cartItem.quantity) || 0
            })</button>
        </div>
        {
          props.cartItem
            ?  <div className={classes.btnAdd}>
                  <button className={classes.btnRemove} onClick={() => props.removeFromCart(props.cartItem)}>Remove</button>
              </div>
            : <div className={classes.btnAdd}>
                  <button className={classes.btnRemove} onClick={() => props.removeFromCart(props.cartItem)} disabled>Remove</button>
              </div>
        }


    </div>
}
export default ProductItem;