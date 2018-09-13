
const carWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id);

const  itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0];

const addToCart = (cart, item) => {
    const cartItem = itemInCart(cart, item);
    return cartItem === undefined
        ? [ ...carWithoutItem(cart, item), {...item, quantity: 1} ]
        : [ ...carWithoutItem(cart, item), {...cartItem ,quantity: cartItem.quantity + 1}]
};
const removeFromCart = (cart, item) => {
    return item.quantity === 1
        ? [...carWithoutItem(cart, item)]
        : [...carWithoutItem(cart, item), {...item, quantity: item.quantity - 1}]
};

const removeAllFromCart = (cart, item) => {
    return[...carWithoutItem(cart, item)]
};

const cartReducer = (state=[], action) => {
    switch (action.type){
        case 'ADD':
            console.log("ADD new state:", [...state, action.payload]);

            return addToCart(state, action.payload)

        case 'REMOVE':
            return removeFromCart(state, action.payload)

        case 'REMOVE_ALL':
            return removeAllFromCart(state, action.payload)

    }
    return state;

}

export default cartReducer;