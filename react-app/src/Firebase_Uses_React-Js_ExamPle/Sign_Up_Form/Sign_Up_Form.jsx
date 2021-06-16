import React from 'react'
import '../../App.css'
import firebase from 'firebase'

class Sign_Up_Form extends React.Component{
constructor(){
    super()
this.state = {
     OnChanGe_email: "",
     OnChanGe_password: "",
     email: "",
     password: ""
  }
}
    Sign_Up = () => {
this.setState({
    email: this.state.OnChanGe_email,
    password: this.state.OnChanGe_password,
})

// firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//     console.log(user)
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log(errorMessage)
//     // ..
//   });

}
    render(){
        return(
            <div>
                <h1 className={"props"}>Sign_Up Form</h1>
<br/>
<br/>
<div style={{textAlign:"center"}}>
<b className="props">Email:</b> 
<br/>
<br/>
<input className="input" onChange={(e) => {this.setState({OnChanGe_email: e.target.value})}} type="text" placeholder="enter your email address..."/>
<br/>
<br/>
<b className="props">Password:</b>
<br/>
<br/>
<input className="input" onChange={(p) => {this.setState({OnChanGe_password: p.target.value})}} type="password" placeholder="enter your password..."/>
<br/>
<br/>
<br/>
<button className="butt" style={{marginLeft: '7px'}} onClick={this.Sign_Up}>SiGn Up</button>

</div>
            </div>
        )
    }
}

export default Sign_Up_Form;