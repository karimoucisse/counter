import React from "react";
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'
class Counter extends React.Component {

    render() {
        return (
            <div className="row justify-content-around" >
                <Button variant="danger" onClick={this.props.substract} className="col-2 text-center">-</Button>
                <h2 className="col-2 text-center">{this.props.count}</h2>
                <Button variant="success" onClick={this.props.increment} className="col-2 text-center">+</Button>
            </div>
        )
    }
}
export default Counter