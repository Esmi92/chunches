import React from 'react'
import {Redirect} from 'react-router-dom'

function HOC(Component){ 
    
const WrappedComponent = (props)=>{
    
    const token = window.localStorage.getItem('token')
    return token ? <Component {...props}/> : <Redirect to ='/'/>
} 

return WrappedComponent;
}

export default HOC; 