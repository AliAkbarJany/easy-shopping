import React from 'react';
// import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import Allproducts from '../Products/Allproducts/Allproducts';
import Bangles from '../Products/Bangles/Bangles';

const Home = () => {
    return (
        <div style={{"backgroundColor":"#F2C9E0"}}>
            
            <Banner></Banner>
            <Allproducts></Allproducts>
            {/* <Bangles></Bangles> */}
            

        </div>
    );
};

export default Home;