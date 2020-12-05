import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useParams, useHistory, Link} from 'react-router-dom'

//*Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Product() {
    const [product,setProduct] = useState({})
    const params = useParams()
    console.log(params.id)

    const [token, setToken] = useState(window.localStorage.getItem('token'))

    useEffect(()=>{
         setToken(window.localStorage.getItem('token'))
    },[token])
    //cada vez que se llame token se hace la función adentro

    const history = useHistory()
   
    useEffect(()=>{
        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item/${params.id}`)
        .then((response)=>{
            setProduct(response.data)
        })
    },[])

    return (
        <div>
            <Navbar />
            <div className="container mt-5 d-flex justify-content-center">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={product && product.image} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-7 ml-3">
                        <div className="card-body d-flex justify-content-center flex-column">
    <h5 className="card-title mt-3">{product && product.product_name}</h5>
    <p className="card-text mt-3">{product && product.description}</p>
    <p className="card-text mt-3">Categoria: {product && product.category}</p>
    <p className="card-text mt-3"><medium className="text-muted">Precio: ${product && product.price} MXN</medium></p>
    <p className="card-text mt-3"><small className="text-muted">SKU: {product && product.sku}</small></p>
    
    <button className="mt-3 btn btn-success"
   onClick={()=>{
       console.log(token)
        {token?history.push('/cart'):history.push('/login')}
    }}>COMPRAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer className="fixed-bottom">
            <Footer/>
            </footer>
        </div>
    )
}
export default Product;