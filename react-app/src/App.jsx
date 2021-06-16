import React from 'react'
// import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import SignUp from './Component/signup'
import AbouT from './Component/about.jsx';
import { Multiples_Component1 , Multiples_Component2 , Second_Multiples_Comp_Example} from './Multiples_Components_Example...$/Multiples_Components';
import LoGin from './Component/login.jsx';
import HoMe from "./Component/home";
import ConTacT from './Component/contact.jsx';
import Bootstrap from './React...BooTsTrap...$/PracBootstrap.jsx'
import Material_UI from './Material_UI_Core...$/Material_UI.jsx';
import ImaGe_UsEs from './ImaGe...UsEs...$/ImaGe_Use';
import STaTe from './STaTe/state'
import ComPleTeReacT from './ComPleTe_ReacT...$/Complete_React';
import Revise from './STaTe/revise'
import Parent from './Props/Example/Parent';
import Sign_Up_Form from './Firebase_Uses_React-Js_ExamPle/Sign_Up_Form/Sign_Up_Form'
import AppRouter from './Router/router'
import LifeCycle from './LifeCycle_Event/LifeCycle';

class Ecommerce_App extends Component{
  render(){
    return(
<div>
{/* <HoMe />
<LoGin />
<SignUp />
<ConTacT />
<AbouT />
<Multiples_Component1 />
<Multiples_Component2 />
<Second_Multiples_Comp_Example />
<Bootstrap /> */}
<Material_UI />
{/* <ImaGe_UsEs />
<STaTe />
<ComPleTeReacT />
<Revise />
<Parent />
<h1 className="propss">Firebase_ConnecT_InTo_Your_React_ProJect...!</h1>
<br/>
<Sign_Up_Form /> */}

{/* React-Router-DOM */}

{/* <AppRouter /> */}

{/* LifeCycle-Event */}

{/* <LifeCycle /> */}

</div>
    )
  }
}



// Function...Component...!


//  function Example() {
//   return(
//     <div>
//       <h1>This Is Function Component...! </h1>
//     </div>
//   )
// }

// export default Example

// Class...Component...!

// class Example2 extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>This Is Class Component...!</h1>
//       </div>
//     )
//   }
// }

// export default Example2;

// export { 
  //  User,
  //  App
// }

// This Is Multiples Components Export...!

///////////////////////////////////////////////////////////////

// Solo-Learn_Components_Inside_Uses_Components_ExamPle...!

////////////////////////////////////////////////////////////////

// function Component_Uses(props){
//    return <h1>My Name Is: {props.name}</h1>
// }

// class Components extends React.Component{
//   render(){
//    return(
//      <div>
// <Component_Uses age="18" name="MarK" />
// <Component_Uses age="24" name="AcE" />
// <Component_Uses age="16" name="MyerS" />
// <Component_Uses age="11" name="Dvider" />
//     </div>
//    )
//  }
// }
// const NameS = <Components />;

// ReactDOM.render(
// NameS,
// document.getElementById('root')
// )

/////////////////////////////////////////////////////////////////

// Props vs State


// As a recap, here is a summary of the main differences between props and state:

// - We use props to pass data to components.
// - Components use state to manage their data.
// - Props are read-only and cannot be modified.
// - State can be modified by its component using the setState() method.
// - The setState() method results in re-rendering the component affected.

// Components that have state are called stateful, while components that do not use state are called stateless.

/////////////////////////////////////////////////////////////////



export default Ecommerce_App

