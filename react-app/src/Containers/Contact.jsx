import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

class Contact extends React.Component{
    UpdateComponent = () => {
        this.props.history.push('/')
        }
    render(){
        return(
            <div>
                <h1 className="props">Contact_PaGe</h1>
               
                <div style={{wordSpacing:"120px"}}>
                <Link className="propss" to="/contact">Go To Contact PaGe...!</Link>
                
                <button className="props" onClick={this.UpdateComponent}>Go To Home PaGe...!</button>
               
                <Link className="propss" to="/about">Go To About PaGe...!</Link>
               </div>
            </div>
        )
    }
}

export default Contact;
