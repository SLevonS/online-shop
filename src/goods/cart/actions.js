export const addToCart = (item) => {
    return{
        type:'ADD',
        payload: item
    }
};

 export const removeFromCart = (item) => {
    return{
        type:'REMOVE',
        payload: item
    }
};

export const removeAllFromCart = (item) => {
    return{
        type:'REMOVE_ALL',
        payload: item
    }
};

