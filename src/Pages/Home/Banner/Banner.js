import React from 'react';
import './Banner.css'
import bangle from '../../../images/banner/bangle.png'
import chain from '../../../images/banner/chain.png'
import ring from '../../../images/banner/ring.png'
import logo from '../../../images/logo.png'
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <div className='mt-12 flex '>

            <Carousel fade className='w-50'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bangle}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={chain}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ring}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <br />

            <div className='ban flex items-center justify-center '  >
                <div className='image' >

                    <img className='d-block ' src={logo} alt="" />

                </div>
            </div>
            
        </div>
    );
};

export default Banner;