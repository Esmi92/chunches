import React, {useEffect} from 'react'
import axios from 'axios'
import useForm from '../hook/useForm'
import {useHistory} from 'react-router-dom'

//*Componets
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Login (){
    let history = useHistory()

    const sendInfo =(data)=>{
        axios.post('https://ecomerce-master.herokuapp.com/api/v1/login',data)
        .then((response)=>{
            console.log(response.status)
            if(response.status===200){
                window.localStorage.setItem('token',response.data.token)
                window.localStorage.setItem('role',response.data.role)
                
                alert('Bienvenido')
                history.push('/')
            }
        }).catch((error)=>{
            alert(error.response.data.message)
        })
    }

    const{inputs,handleInputChange,handleSubmit} =useForm(sendInfo,{})

    return(
        <form onSubmit={handleSubmit}>
        <Navbar />
        <div className='container d-flex flex-column align-items-center mt-3'>
            
            <div className="col-md-5">
                <div className='form-group'>
                    <label htmlFor="">Mail</label>
                    <input
                        onChange={handleInputChange}
                        value={inputs.email}
                        type="email" className='form-control' name='email' id='email' />
                </div>
            </div>
            <div className="col-md-5">
                <div className='form-group'>
                    <label htmlFor="">Contraseña</label>
                    <input
                        onChange={handleInputChange}
                        value={inputs.password}
                        type="password" className='form-control' name='password' id='password' />
                </div>
            </div>
        
            <div className="col-md-12 text-center">
                <button type='submit' className='btn btn-success' id='signupButton'>Login</button>
            </div>
        </div>
        <footer className="fixed-bottom">
            <Footer/>
            </footer>
    </form>
    )
}
export default Login;