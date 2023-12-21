import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bannerImage1 from '../../assets/banner1.jpg';
import bannerImage2 from '../../assets/banner2.jpg';
import bannerImage3 from '../../assets/banner3.jpg';
import "./styles.css";


function XBCarousel() {
    return (
        <Carousel className='XBCarousel'>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={bannerImage1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>"Empowering Tomorrow, Today: Pioneering IT Solutions for a Bold Future"</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={bannerImage2}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>"Unleashing Tomorrow, Today: Your IT Revolution Begins Here."</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bannerImage3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>"Elevate Possibilities with Tech Innovation."</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default XBCarousel;