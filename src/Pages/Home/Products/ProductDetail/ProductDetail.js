import React from 'react';
import './/ProductDetail.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import Cart from '../Cart/Cart';

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    // INcrease..............
    const [quantity, setQuantity] = useState(1)
    const handleIncrease = e => {
        if (quantity < 5) {
            setQuantity(quantity + 1)
        }

    }
    // Decrease................
    const handleDecrease = e => {

        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    // Add To cart.........
    const handleAddToCart = (product) => {
        console.log(product)
        const newCart = [...cart, product]
        setCart(newCart)

        fetch(`http://localhost:5000/cart`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                // const newCart = [...cart, product]
                // setCart(newCart)
                console.log(data)
            })
    }

    return (
        <div style={{ "backgroundColor": "#F2C9E0" }} className=' lg:h-screen'>
            <div className='pro-Detail-container lg:w-1/2 h-auto mx-auto mx-32 h-screen flex items-center'>
                <div className='img-magnify px-12'>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Bangles',
                            isFluidWidth: true,
                            src: product.picture,

                        },
                        largeImage: {
                            src: product.picture,
                            width: 500,
                            height: 800,
                        }
                    }} />

                    <div>
                        <p>Price : {product.price}</p>
                    </div>

                    <div className='mt-32 flex justify-center'>
                        <button onClick={handleDecrease} class="btn btn- active  btn-ghost sm:btn-sm md:btn-md lg:btn-lg mr-2">-</button>
                        <div className='mr-2'>
                            <button className='btn btn-warning'>{quantity}</button>

                        </div>
                        <button onClick={handleIncrease} class="btn btn- active btn-ghost sm:btn-sm md:btn-md lg:btn-lg">+</button>
                    </div>
                    <div className='mt-12 mb-5  '>
                        <div className='flex mx-auto justify-center'>
                            <button class="btn btn-xs btn-success sm:btn-sm md:btn-md lg:btn-lg mr-2">BUY NOW</button>
                            <button onClick={() => handleAddToCart(product)} class="btn btn-xs btn-warning sm:btn-sm md:btn-md lg:btn-lg">ADD TO CART</button>
                        </div>
                    </div>
                </div>

                <div className='order-container mx-5 mx-auto'>
                    <div className='pt-5'>
                        <Cart
                            cart={cart}
                            product={product}
                        ></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;