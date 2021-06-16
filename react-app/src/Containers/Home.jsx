import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

class Home extends React.Component{
    UpdateComponent = () => {
        this.props.history.push('/contact')
        }
    render(){
        return(
            <div>
                <h1 className="props">Home_PaGe</h1>
               
                <div style={{wordSpacing:"120px"}}>
                <Link className="propss" to='/'>Go To Home PaGe...!</Link>
              
                <button className="props" onClick={this.UpdateComponent}>Go To Contact PaGe...!</button>
               
                <Link className="propss" to="/about">Go To About PaGe...!</Link>
                </div>
            </div>
        )
    }
}

export default Home;