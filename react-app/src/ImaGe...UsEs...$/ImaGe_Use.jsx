import React from 'react'
import Image from './ImaGes...$/image.jpg'

function Uses(){
    return(
        <div>
            <h1 className="h1" style={{textAlign:"center",textDecoration:"unuderline",fontFamily:"Arial, Helvetica, sans-serif",fontStyle:"oblique",fontWeight:"bold"}}>ImaGe...UsEs...!</h1>
        </div>
    )
}

class ImaGe_UsEs extends React.Component{
    render(){
        return(
            <div>
                <Uses />
                <img src={Image} style={{marginLeft:"250px"}} alt="ImaGe_UsEs"/>
            </div>
        )
    }
}

export default ImaGe_UsEs;