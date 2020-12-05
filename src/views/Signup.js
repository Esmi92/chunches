import React from 'react'
import axios from 'axios'
import{useHistory} from 'react-router-dom'
import useForm from '../hook/useForm'

//*Componets
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Signup() {
    let history = useHistory()

    const sendInfo = (data)=>{
        if(data.password === data.password_confirm){
            delete data.password_confirm
            axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup',data)
            .then((response)=>{
                console.log(response.status)
                if(response.status==201 || response.status==200){
                    alert('Usuario creado con exito, favor de loggear')
                    history.push('/')
                }
            }).catch((error)=>{
                alert(error.response.data.message)
            })
        }else{
            alert('La confirmación de contraseña no coincide')
        }
    }

    const {inputs,handleInputChange,handleSubmit}=useForm(sendInfo,{})
    return (
        <form onSubmit={handleSubmit}>
            <Navbar />
            <div className='container d-flex flex-column align-items-center mt-3 mb-5'>
                <h3 className="m-2">Unete a nuestra comunidad y encuentra las mejores ofertas</h3>
                <div className="col-md-5">
                    <div className='form-group'>
                        <label htmlFor="">Nombre</label>
                        <input
                            onChange={handleInputChange}
                            value={inputs.first_name}
                            type="text" className='form-control' name='first_name' id='first_name' />
                    </div>
                </div>
                <div className="col-md-5">
                    <div className='form-group'>
                        <label htmlFor="">Apellido</label>
                        <input
                             onChange={handleInputChange}
                             value={inputs.last_name}
                            type="text" className='form-control' name='last_name' id='last-_name' />
                    </div>
                </div>
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
                        <label htmlFor="">Fecha de nacimiento</label>
                        <input
                            onChange={handleInputChange}
                            value={inputs.birth_date}
                            type="date" className='form-control' name='birth_date' id='birth_date' />
                    </div>
                </div>
                <div className="col-md-5">
                    <div className='form-group'>
                        <label htmlFor="">Genero</label>
                        <select name="gender" id="gender" className='form-control'
                        onChange={handleInputChange}
                        value={inputs.gender}
                        >
                            <option value="" disabled>Selecciona</option>
                            <option value="F">Mujer</option>
                            <option value="M">Hombre</option>
                            <option value="X">Otro</option>
                        </select>
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
                <div className="col-md-5">
                    <div className='form-group'>
                        <label htmlFor="">Confirma contraseña</label>
                        <input
                            onChange={handleInputChange}
                            value={inputs.password_confirm}
                            type="password" className='form-control' name='password_confirm' id='confirm' />
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <button type='submit' className='btn btn-success' id='signupButton'>Iniciar</button>
                </div>
            </div>
            <footer>
            <Footer/>
            </footer>
        </form>
    )
}
export default Signup;