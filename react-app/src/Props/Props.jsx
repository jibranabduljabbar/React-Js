import React from 'react'

class Props extends React.Component{
    render(){
      
        return(
            <div>
        <h1 className="props">Props</h1>
        <h3 className="props"> State_File_ProPerty_Name_Used_By_Prop_File_InsiDe: {this.props.Name}</h3>
        <h3 className="props"> State_File_ProPerty_Email_Used_By_Props_File_InsiDe: {this.props.Email}</h3>
        <h3 className="props"> State_File_ProPerty_PaGe_Name_Used_By_Props_File_InsiDe: {this.props.PaGe}</h3>
        
        <br/>

        <button className="butt" onClick={()=> this.props.Send_Function("Your_Data_Was_SenD...!")}>SenD_DaTa</button>
     
            </div>
        )
    }
}

// SoloLearn_ExamPle...!

// function SoloLearn(props){
// return <h1>My Name Is: {props.name}</h1>
// }

// const FullName = <SoloLearn name="Jibran"/>

export default Props;