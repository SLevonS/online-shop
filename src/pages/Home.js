import React from 'react';
import ProductListing from '../goods/goods-listing';
import data from '../data/products.json';

const Home = (props) => {
    return <div>
        <ProductListing products={data.products}/>
    </div>
};
export default Home;
