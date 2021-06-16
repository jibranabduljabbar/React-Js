import { React, Component } from 'react'
  
class Bootstrap extends Component{
    render(){
        return(
            <div style={{borderRadius:"45px",backgroundColor:'blueviolet'}}>
        <h1 className="boot">BooTsTraP...UsE...!</h1>
        <button type="button" style={{margin:"30px",fontStyle:"oblique"}} className="btn btn-primary">Primary</button>
        <button type="button" style={{margin:"30px",fontStyle:"oblique"}} className="btn btn-secondary">Secondary</button>
        <button type="button" style={{margin:"30px",fontStyle:"oblique"}} className="btn btn-success">Success</button>
        <button type="button" style={{margin:"30px",fontStyle:"oblique"}} className="btn btn-danger">Danger</button>
        <button type="button" style={{margin:"30px",fontStyle:"oblique"}} className="btn btn-warning">Warning</button>
        <button type="button" style={{margin:"30px",fontStyle:"oblique"}} className="btn btn-info">Info</button>
        <button type="button" style={{margin:"30px",fontStyle:"oblique"}} className="btn btn-light">Light</button>
        <button type="button" style={{margin:"30px",fontStyle:"oblique"}} className="btn btn-dark">Dark</button>
        <button type="button" style={{margin:"30px",fontStyle:"oblique"}} className="btn btn-link">Link</button>
      </div>
        )
    }  
}

export default Bootstrap