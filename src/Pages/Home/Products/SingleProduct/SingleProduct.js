import React from 'react';
import { Link, useNavigate } from 'react-router-dom'

const SingleProduct = ({ singleProduct }) => {
    const { _id, name, price, picture } = singleProduct
    // console.log(singleProduct)
    const navigate = useNavigate()
    const navigateToProductDetail =id=>{
        navigate(`/productDetail/${id}`)
    }
    return (
        <div>
            <div onClick ={()=>navigateToProductDetail(_id)} class="card h-full card-compact bg-base-100 shadow-xl">
                <figure><img className='w-full h-60' src={picture} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    {/* <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div> */}
                    {/* RATINGS......... */}
                    <div class="rating gap-1">
                        <input type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
                        <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" />
                        <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400" />
                        <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400" />
                        <input type="radio" name="rating-3" class="mask mask-heart bg-green-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;