import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link,useLocation} from 'react-router-dom'
//! El componente no sabe donde esta y para usa useLocation para consultar la ruta 

//*Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Results (){

    const [search,setSearch] = useState([])

    let query = useLocation().search
    let useQuery = new URLSearchParams(query)
    let theSearch = useQuery.get('name')
    //! esto hay que meterlo en un var/let/const porque se va a efectuar dentro useEffect y no permite la función dentro del callback
    

    useEffect(()=>{
        axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item?name=${theSearch}`)
        .then((response)=>{
            console.log(response.data)
            setSearch(response.data)})
    },[query]) // aqui porque queremos que aún en results cada que cambie query se cambie el estado
    //Dentro de use Effect tengo que leer el ?= el query para hacer la busqueda con axios

        
    

    return(
        <div>
            <Navbar/>
            <div className="d-flex justify-content-center m-5">
    {search.length>0 ? (<h4>Encontramos {search.length} Chunches a tu busqueda</h4>): (<h4>Lo sentimos aún no manejamos esos Chunches</h4>)}
    </div>
        <div className="d-flex justify-content-center flex-row flex-wrap" id="card">
        {search.map((item)=>
            (<div className="container m-3 col-5">
            <div className="card mb-3 product">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={item.image} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
        <Link className="card-title" to ={`/product/${item._id}`}>{item.product_name}</Link>
        <p className="card-text">{item.description}</p>
        <p className="card-text"><medium className="text-muted">Precio: ${item.price} MXN</medium></p>
        <p className="card-text"><small className="text-muted">SKU: {item.sku}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
        )}
        </div>
        <footer className="fixed-bottom">
            <Footer/>
            </footer>
        </div>
    )
    
}

export default Results; 