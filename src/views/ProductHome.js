import React, {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Home.scss'


const categories = [
    "Books",
    "Movies",
    "Music",
    "Games",
    "Electronics",
    "Computers",
    "Home",
    "Garden",
    "Tools",
    "Grocery",
    "Health",
    "Beauty",
    "Toys",
    "Kids",
    "Baby",
    "Clothing",
    "Shoes",
    "Jewelery",
    "Sports",
    "Outdoors",
    "Automotive",
    "Industrial"
]


function ProductHome() {

    const [items,setItems] = useState([])
    const [categoria,setCategory] = useState('')

   useEffect(()=>{
    axios.get(`https://ecomerce-master.herokuapp.com/api/v1/item?category=${categoria}`)
    .then((response)=>{
        setItems(response.data)
    }).catch((error)=>{
        alert(error.response.data.message)
    })
   },[categoria])
       
    

    return (
        <div>
            <form className="container mt-2 d-flex justify-content-center">
                <select className="form-control" name="category" id="category" 
                onChange={(event)=>{
                    setCategory(event.target.value)
                }}>
                    <option value="">Categorias</option>
                    {categories.map((cat) =>  // duda porque map y no foEach- FoEach no funciona aqui punto
                    // el Map regresa otro Array algo como parte de sus funciones 
                        (<option value={cat}>{cat}</option>))
                }
                </select>
            </form>
            <div className="d-flex justify-content-center flex-row flex-wrap" id="card">
            {items.map((item)=>
                (<div className="container m-3 col-5">
                <div className="card mb-3 product">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={item.image} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
            <Link className="card-title" to={`/product/${item._id}`}>{item.product_name}</Link>
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
            
        </div>
    )
}
export default ProductHome;

