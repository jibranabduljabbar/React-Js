import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import Home from '../Containers/Home.jsx'
import About from '../Containers/About.jsx'
import Contact from '../Containers/Contact.jsx'

class AppRouter extends React.Component{
    render(){
        return(
<Router>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About}/>
    <Route exact path='/contact' component={Contact}/>
</Router>
        )
    }
}

export default AppRouter;