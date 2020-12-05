import React from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

//*Components: 
import Home from './views/Home'
import Signup from './views/Signup'
import Login from './views/Login'
import Product from './views/Product'
import Results from './views/Results'
import NewProduct from './views/NewProduct'
import ChangeProduct from './views/ChangeProduct'
import Perfil from './views/Perfil'
import Cart from './views/Cart'

const Logout=()=>{
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('role')

    return <Redirect to='/'/>
}

function Chunches (){
    return(
        <Router>
            <Switch>
                <Route exact path = "/" component={Home}/>
                <Route exact path = "/cart" component={Cart}/>
                <Route exact path = "/signup" component={Signup}/>
                <Route exact path = "/login" component={Login}/>
                <Route exact path = "/product/:id" component={Product}/>
                <Route exact path = "/results" component={Results}/>
                <Route exact path = "/new_product" component={NewProduct}/>
                <Route exact path = "/change_product" component={ChangeProduct}/>
                <Route exact path = "/logout" component={Logout}/>
                <Route exact path = "/perfil" component={Perfil}/>
            </Switch>
        </Router>
    )
}
export default Chunches;