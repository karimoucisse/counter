import React from 'react';
import Counter from "./components/Counter"
import "./styles/global.css"

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      number: 0
    }

  }
  handleMinusClick = () => {
    if(this.state.number>0) {
      this.setState ( {number : this.state.number - 1} )
    }
  }
  handlePlusClick = () => {
    this.setState ( {number : this.state.number + 1} )
  }

 render() {
  return (
    <div className="container align-middle  py-5">
      <div className="row text-center">
        <h1 className="col">Counter</h1>
      </div>
      <Counter count = {this.state.number} substract = {this.handleMinusClick} increment ={this.handlePlusClick}/>
    </div>
  )

 }

}
export default App