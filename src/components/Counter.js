import React from "react";
import Button from "react-bootstrap/Button"
import 'bootstrap/dist/css/bootstrap.min.css'
class Counter extends React.Component {

    render() {
        return (
            <>
                <Button variant="danger" onClick={this.props.substract} className="col-2 text-center">-</Button>
                <h2 className="col-2 text-center">{this.props.count}</h2>
                <Button variant="success" onClick={this.props.increment} className="col-2 text-center">+</Button>

                {/* <Button variant="danger" onClick={this.props.substract2} className="col-2 text-center">-</Button>
                <h2 className="col-2 text-center">{this.props.count2}</h2>
                <Button variant="success" onClick={this.props.increment2} className="col-2 text-center">+</Button> */}
            </>
        )
    }
}
export default Counter