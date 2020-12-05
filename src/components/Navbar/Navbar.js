import React, {useState} from 'react'
import './Navbar.scss'
import payload from '../../utils/payload'
import { Link, useHistory } from 'react-router-dom'



function Navbar() {

    let history = useHistory()

    const user = payload()

    const [products,setProducts] = useState('')

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <Link className="navbar-brand col-2" to="/">Chunches</Link>
                <form className="form-inline my-2 my-lg-0 col-6"
                onSubmit={(event)=>{
                    event.preventDefault()
                    history.push(`/results?name=${products}`)
                }}>
                    <input className="form-control mr-sm-2" id="search-bar" type="search" placeholder="Search" aria-label="Search" 
                    value={products} onChange={(event)=>{
                        setProducts(event.target.value)
                    }}/>
                    <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div className="collapse navbar-collapse col-4 justify-content-end pr-5">
                    {user ? (
                        <ul className="navbar-nav">
                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                    <Link className="nav-link" to="/perfil">Perfil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout" >Logout</Link>
                        </li>
                    </ul>
                    ):
                    (
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Singup</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                    )}
                    
                </div>
            </nav>
        </div>
    )
}
export default Navbar;