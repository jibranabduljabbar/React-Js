import React from 'react';
import '../../App.css';
import Child from './Child'
import { colors } from '@material-ui/core';

class Parent extends React.Component{ 

constructor(){
    super()
    this.state = {
ComData: "",
Com: ''

    }
}
    Func = (Data) => {
       this.setState({
        ComData: (Data),   
        Con: 'ConTact No: +923433321123',
        User: 'User: User1', 
        Gmail: 'Gmail: user1@gmail.com'  
    })
        
        }
    render(){
     return(
<div>
<h1 className="h11">!...Ecommerce...!</h1>

<br/>
<br/>

<Child Func={this.Func} name="HouSe" price="1000000"/>
<Child Func={this.Func} name="BiKe" price="40000"/>  
<Child Func={this.Func} name="Car" price="700000"/>
<Child Func={this.Func} name="LapTop" price="60000"/>
<Child Func={this.Func} name="Oppo_F1" price="50000"/>
<Child Func={this.Func} name="CompuTer" price="70000"/>
<Child Func={this.Func} name="RefriGerator" price="250000"/>

<div style={{backgroundColor:"grey",borderRadius:"100px"}}><h3 style={{backgroundColor:"white",marginTop:"40px", color:"grey",borderRadius:"100px"}} className="butt"><b>DaTa:</b></h3><br/><br/><br/><h3 className="props"> {this.state.ComData} </h3>


<br/>
<h3 className="props">{this.state.Con}</h3>
<br/>
<h3 className="props">{this.state.User}</h3>
<br/>
<h3 className="props">{this.state.Gmail}</h3>
<br/>
<br/>
<br/>
</div>
         </div>
     )
 }
}

export default Parent;