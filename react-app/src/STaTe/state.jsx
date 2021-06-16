import React from 'react';
import '../App.css'
import Props from '../Props/Props';

class STaTe extends React.Component {
    constructor() {
        super()
        // State Value Set //
        this.state = {
            name: "State_Work...!",
            email: "example@gmail.com",
            Send: "",
            Detail: {
                number: +923345454576,
                Address: "React.Com",
                value: "",
                writeEmail: ""
            }
        }
        

        //SeCond_OpTion...!

        // this.Set_Data = this.Set_Data.bind(this)

        // State Value Set //

    }

    

    Set_Name = () => {
        this.setState({
            name: this.state.value
        })
    }

    Set_Email = () => {
        this.setState({
            email: this.state.writeEmail
        })

    }

    HandleFunc(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    Get_Name = () => {
        console.log(this.state.name)
    }

    Send_Function = (props) => {
        this.setState({
            Send : (props)
        })
         
    }

    // 1:21:33

    // Second_Option...!

    // Set_Data(){
    //     console.log(this.state.name)
    // }

    render() {
        return (
            <div>
                {/* State Value Set */}
                <h1 className="h11">Name: {this.state.name}.</h1>
                <h2 className="h22">Email: {this.state.email}.</h2>
                <h2 className="h33">Address: {this.state.Detail.Address}.</h2>
                <h2 className="h44">Number: {this.state.Detail.number}.</h2>
                <h1 style={{ textAlign: "center", color: "white", fontWeight: "bold", fontStyle: "oblique", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", backgroundColor: "black", borderRadius: "100px" }}>S...T...a...T...e...!</h1>
                <br/>
                
                <input type="text" onChange={(e) => this.setState({value: e.target.value})} placeholder="Enter_Your_Name...!" className="input"/>
                <input placeholder="Enter_Your_Email_Address...!" type="email" onChange={(s)=> this.setState({writeEmail: s.target.value})} className="input"/>
                
                {/* <input name="name" type="text" onChange={(e) => this.HandleFunc(e)} placeholder="Enter_Your_Value...!" className="input" />
                <input name="email" placeholder="Enter_Your_Email_Address...!" type="email" onChange={(e) => this.HandleFunc(e)} className="input" /> */}
                <br />
                <br />

                <button className="butt" style={{marginLeft:"10px"}} onClick={this.Set_Name}>Set_Name</button>
                <button className="butt" style={{marginLeft:"10px"}} onClick={this.Set_Email}>Set_Email</button>
                <button className="butt" style={{marginLeft:"10px"}} onClick={this.Get_Name}>Get_Name</button>
                <br />
                <br />
                
<Props Send_Function={this.Send_Function} PaGe="Props_PaGe_ExamPle...!" Name={this.state.name} Email={this.state.email}  />
    <br/>
            <h1 className='propss'>{this.state.Send}</h1>
            <br/>
     <br/>
     <br/>
     <br/>
            </div>
        )
    }
}

export default STaTe;

