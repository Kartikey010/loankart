import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom';
import "./index.css";
import { Navbar } from 'react-bootstrap';
import reactBootsrap from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import girl from './images/use 1.1.png';
import build from './images/use 3.png';
import form from './images/use 4.png';
import { Button } from 'react-bootstrap';



ReactDOM.render(
    <>
    <ListGroup defaultActiveKey="#link1">
    <ListGroup.Item action href="#link1">
      Link 1
    </ListGroup.Item>
    <ListGroup.Item action href="#link2" disabled>
      Link 2
    </ListGroup.Item>
    <ListGroup.Item action onClick={alertClicked}>
      This one is a button
    </ListGroup.Item>
  </ListGroup>





    </>
    
    
    , document.getElementById("rootprofile"));