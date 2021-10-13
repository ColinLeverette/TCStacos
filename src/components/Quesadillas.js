import { Component } from "react";
import { IoMdAdd } from "react-icons/io";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class Quesadillas extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  _handleAddToCart = (e) => {
    let cartItem = e.target.previousElementSibling.innerText;
    this.setState({
      cart: [...this.state.cart, cartItem],
    });
    console.log(this.state.cart);
  };

  render() {
    return (
      <div>
        <Container>
          <h1>Quesadillas</h1>
          <Card>
            <h2>Gringas</h2>
            <IoMdAdd onClick={this._handleAddToCart} />
          </Card>
          <Card>
            <h2>Piratas</h2>
            <IoMdAdd onClick={this._handleAddToCart} />
          </Card>

          <Card>
            <h2>Campechanas</h2>
            <IoMdAdd onClick={this._handleAddToCart} />
          </Card>
        </Container>
      </div>
    );
  }
}

export default Quesadillas;
