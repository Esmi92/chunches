import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.scss'
import HOC from '../utils/protect'

function Cart (){
    return(
        <div>
            <Navbar/>
        <div className="d-flex justify-content-center body">
            <img src="https://www.creativefabrica.com/wp-content/uploads/2019/04/Shopping-cart-icon-by-marco.livolsi2014-8-580x386.jpg" alt=""/>
        </div >
        <div className="fixed-bottom">
        <Footer/>
        </div>
        
        </div> 
    )
}
export default HOC(Cart);