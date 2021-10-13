import { Component } from "react";
import Trompo from "./Trompo";
import Bistec from "./Bistec";
import Barbacoa from "./Barbacoa";
import Chicharron from "./Chicharron";
import { IoMdAdd } from "react-icons/io";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

class Maiz extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  _handleAddToCart = (e) => {
    e.preventDefault();
    console.log(e);
  };

  render() {
    return (
      <div>
        <Container>
          <h1> Maiz </h1>
          <Card>
            <Trompo id='trompo'/>
            <IoMdAdd onClick={this._handleAddToCart}/>
          </Card>
          <Card>
            <Bistec />
            <IoMdAdd onClick={this._handleAddToCart}/>
          </Card>
          <Card>
            <Barbacoa />
            <IoMdAdd onClick={this._handleAddToCart}/>
          </Card>
          <Card>
            <Chicharron />
            <IoMdAdd onClick={this._handleAddToCart}/>
          </Card>
        </Container>
      </div>
    );
  }
}

export default Maiz;
