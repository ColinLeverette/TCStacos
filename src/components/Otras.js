import { Component } from "react";
import { IoMdAdd } from "react-icons/io";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class Otras extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Otras</h1>
          <Card>
            <h2>Chiles Rellenos</h2>
            <IoMdAdd />
          </Card>
          <Card>
            <h2>Papas Fritas</h2>
            <IoMdAdd />
          </Card>

          <Card>
            <h2>Cebolla Asada</h2>
            <IoMdAdd />
          </Card>
        </Container>
      </div>
    );
  }
}

export default Otras;
