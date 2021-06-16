import React from 'react'
import '../App.css'
import { Component } from 'react'

class Multiples_Component1 extends React.Component{
    render(){
        return(
            <div>
                <h1 className="Multi1">This_Is_Multiples_Components_Example_1...!</h1>
            </div>
        )
    }
}

class Multiples_Component2 extends Component{
    render(){
      return(
        <div>
          <h1 className="Multi">This_Is_Multiples_Components_Example_Any...!</h1>
        </div>
      )
    }
    }

class Second_Multiples_Comp_Example extends Component{
    render(){
        return(
            <div>
                <h1 className="Multi2">This_Is_Second_Multiple_Component_Example...!</h1>
            </div>
        )
    }
}

// This Is Multiples Components Export...!

export {
    Multiples_Component1,
    Multiples_Component2,
    Second_Multiples_Comp_Example,
}