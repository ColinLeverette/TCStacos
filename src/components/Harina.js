import { Component } from "react";
import Trompo from "./Trompo";
import Bistec from "./Bistec";
import Barbacoa from "./Barbacoa";
import Chicharron from "./Chicharron";
import {IoMdAdd} from 'react-icons/io'
import Card from 'react-bootstrap/Card'
import  Container from "react-bootstrap/Container";



class Harina extends  Component{
    render() {
        return(
            <div>
                <Container>
                <h1> Harina </h1>
                <Card>
                <Trompo/>
                <IoMdAdd/>
                </Card>
                <Card>
                <Bistec/>
                <IoMdAdd/>
                </Card>
                <Card>
                <Barbacoa/>
                <IoMdAdd/>
                </Card>
                <Card>
                <Chicharron/>
                <IoMdAdd/>
                </Card>
                </Container>
            </div>
        )
        
    }
}

export default Harina