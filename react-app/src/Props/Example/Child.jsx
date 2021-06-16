import React from 'react';
import '../../App.css';

class Child extends React.Component{
 render(){
     return(
         <div>
     <h3 className="props">ProDuct: {this.props.name}</h3>
     <h3 className="props">PriCe: {this.props.price}</h3>
     <button onClick={() => this.props.Func(`ProDuct: ${this.props.name}, PriCe: ${this.props.price}`)} className="butt" >Add Card</button>
         </div>
     )
 }
}

export default Child;