//*Dependencies
import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel'
//? npm i react-bootstrap 
import './Home.scss'


//*Componets
import Navbar from '../components/Navbar'
import ProductHome from './ProductHome'
import Footer from '../components/Footer'


function Home() {
    return (
        <div>
            <Navbar />

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src="https://cdn.viralagenda.com/images/events/ext/817913-03c140acfd048c34e8137aee721520c9.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src="https://pbs.twimg.com/media/BfC01bsCUAAgJ8k.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7einht5X9xihqiY1D1rFVYgm9pfJQTANvg&usqp=CAU"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <ProductHome/>
            <footer className="mt-5">
            <Footer/>
            </footer>
        </div>
    )
}
export default Home;