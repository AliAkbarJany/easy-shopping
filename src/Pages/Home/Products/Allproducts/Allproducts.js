import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

const Allproducts = () => {
    const [allProducts,setAllproducts]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setAllproducts(data))
    },[])
    return (
        <div>
            <div class="divider text-3xl my-5 mx-28 font-extrabold">OUR PRODUCTS</div>
            {/* <h2>products length:{allProducts.length}</h2> */}

            <div className='w-2/3 mx-auto grid grid-cols-4 gap-1 gap-0 mx-32'>
                {
                    allProducts.map(singleProduct=><SingleProduct key={singleProduct._id} singleProduct={singleProduct}></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Allproducts;