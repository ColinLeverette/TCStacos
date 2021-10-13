import { Component } from "react";
import {IoMdAdd} from 'react-icons/io'
import Card from 'react-bootstrap/Card'
import  Container from "react-bootstrap/Container";


class Bebidas extends Component {
    render() {
      return (
        <div>

<Container>
                <h1> Bebidas </h1>
                <Card>
                <h2>Agua</h2>
                <IoMdAdd/>
                </Card>
                <Card>
                <h2>Coca cola (8oz)</h2>
                <IoMdAdd/>
                </Card>
                <h2>Bebidas Mexicanas:</h2>

                <Card>
                <h3>Horchata</h3>
                <IoMdAdd/>
                </Card>
                <Card>
                <h3>Jamaica</h3>
                <IoMdAdd/>
                </Card>
                <Card>
                <h3>Tamarindo</h3>
                <IoMdAdd/>
                </Card>
                <Card>
                <h3>Sidral</h3>
                <IoMdAdd/>
                </Card>
                <Card>
                <h3>Coca Cola Mexicana</h3>
                <IoMdAdd/>
                </Card>
                </Container>

        
          
          
        </div>
      );
    }
  }
  
  export default Bebidas;


  
	
	
	
		
		
		
		
		