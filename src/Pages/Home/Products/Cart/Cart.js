import React from 'react';
import './Cart.css'

const Cart = ({product,cart}) => {
    console.log(cart)

    let total=0;
    
    for(const products of cart){
        // console.log(parseFloat(products.price))
        total=total+ parseFloat(products.price);
        console.log(total)
    }
    return (
        <div>
            <h2 className='text-2xl font-bold'>Order summary</h2>
            <p className='font-bold'>selected items:{cart.length}</p>
            <p>Price: ${product.price}</p>
            <p className='font-bold'>Total Price:${total}</p>
        </div>
    );
};

export default Cart;