import React,{useEffect,useState} from 'react'
import axios from 'axios'
import HOC from '../utils/protect'

//*Components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Perfil (){
    const [user,setUser]= useState({})

    useEffect(()=>{
        const token = window.localStorage.getItem('token')
        const config = {
            headers:{
                Authorization: `JWT ${token}`
            }
        }
        axios.get('https://ecomerce-master.herokuapp.com/api/v1/user/me', config)
        .then((response)=>{
            console.log(response.data)
            setUser(response.data)
        }).catch((error)=>{
            alert(error)
        })
    },[])

    
    return(
        <div>
            <Navbar/>
        <div id="profile" className="mt-5">
            <div className="col-6 d-flex justify-content-center">
            <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="" id="profileImage"/>
            </div>
            <div className="col-6 d-flex flex-column">
                <h3>Permisos de usuario</h3>
    <p>{user && user.role}</p>
                <h3>Información</h3>
    <p>Nombre: {user && user.user && user.user.first_name}</p>
                <p>Apellido: {user&& user.user && user.user.last_name}</p>
    <p>Fecha de nacimiento: {user && user.user && user.user.birth_date.split('T')[0]}</p>
                <h3>Contacto</h3>
    <p>Mail: {user && user.user &&user.user.email}</p>
            </div>
        </div>
        <footer className="fixed-bottom">
            <Footer/>
            </footer>
        </div>
    )
}

export default HOC(Perfil); 