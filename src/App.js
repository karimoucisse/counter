import React from 'react';
import Counter from "./components/Counter"
import "./styles/global.css"

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      number: 0,
      number2 : 0
    }

  }
  handleMinusClick = () => {
    if(this.state.number>0) {
      this.setState ( {number : this.state.number - 1,} )
    }
  }
  handlePlusClick = () => {
    if(this.state.number<100) {
      this.setState ( {number : this.state.number + 1} )
      if(this.state.number === this.state.number2){
        this.setState ( {number2 : this.state.number + 2} )
      }
    }    
    

  }
  handleMinusClick2 = () => {
    if(this.state.number2>0) {
      this.setState ( {number2 : this.state.number2 - 1,} )
      if(this.state.number === this.state.number2){
        this.setState ( {number : this.state.number2 - 2} )
      }
    }
    
  }
  handlePlusClick2 = () => {
    if(this.state.number2<100) {
      this.setState ( {number2 : this.state.number2 + 1} )
    }
  }
  

 render() {
  return (
    <div className="container align-middle  py-5">
      <div className="row text-center">
        <h1 className="col">Counter</h1>
      </div>
      <div className="row justify-content-around" >
        <Counter count = {this.state.number} substract = {this.handleMinusClick} 
          increment ={this.handlePlusClick}  >
        </Counter>
        <Counter  count = {this.state.number2} 
          substract= {this.handleMinusClick2} 
          increment ={this.handlePlusClick2}>
        </Counter>
      </div>
    </div>
  )

 }

}
export default App