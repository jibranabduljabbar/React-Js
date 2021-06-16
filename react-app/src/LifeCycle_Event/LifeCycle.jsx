import React from 'react';
import '../App.css';

class LifeCycle extends React.Component{
   constructor(){
       super()
       this.state = {
           count: 0,
        //    data: []
       }
   console.log('Constructor...!');
    }

static getDerivedStateFromProps(props,state){
    console.log("getDerivedStateFromProps",state)
    return null
}

componentDidMount(){
    console.log("componentDidMount")
//     fetch('https://jsonplaceholder.cypress.io/todos')
//   .then(response => response.json())
//   .then(data => {
// this.setState({
//     data: data
// })  })
//   .catch((err) => {
//       console.log(err)
//   })
}
   render(){ 
    //    console.log("Render...!")
    return(
        
        <div>
             <h1 style={{}} className="propss">LifeCycle_Event</h1>
             {/* ComponentDidMount */} 

             {/* {this.state.data.map((v,i) => {
                 return <li key={i}>{v.id} {v.title} {v.userId} {v.completed}</li>
             })} */}

             {/* getDerivedStateFromProps */}

             <h1 className="props">{this.state.count}</h1>
             <button onClick={() => {this.setState({count: this.state.count+1})}}>InCreament</button>
             <button onClick={() => {this.setState({count: this.state.count-1})}}>DeCreament</button>

        </div>
    )
}
  }

export default LifeCycle;