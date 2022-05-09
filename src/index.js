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
import svg from "./mysvg.svg";
import gem from "./gem.svg";
import human from "./human.svg";
import rate from './rate.svg';
import footer from "./footer.svg"

import { BrowserRouter, Routes, Route } from "react-router-dom";



ReactDOM.render(
    <>     
          
        <Navbar bg="light" expand="lg" className='navbar'>
            <Container >
                <Navbar.Brand>
                    <img src={svg} alt="" />

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="fnav" href="#home">Home</Nav.Link>
                        <Nav.Link className="navs" href="#profile">Profile</Nav.Link>
                        <Nav.Link className='navs' href="#link">Panel</Nav.Link>
                        <Nav.Link className='navs' href="#link">Request</Nav.Link>
                        <Nav.Link className="lnav" href="#link">Login</Nav.Link>
                        <Button className="navbutton btn-sm" variant="dark">Apply now</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container className="wholehome">
        <Container className='first'>

            <Row>
                <Col md={7} sm={12} >
                    <div className='wrapit'>
                        <div className="lending ">
                            Digital Lending <br />With Personal<br />Services
                        </div>
                        <div className="smallt ">
                            Simple online experience.Dedicated Loan<br />
                            Professionals.online Pre-Approvals.
                        </div>
                        <Button className='lendbutton greenbutton'>Apply now</Button>
                    </div>

                </Col>
                <Col md={5} sm={12} className="full"><img class="girls" src={girl} alt='girl' /></Col>
            </Row>

        </Container>
         <Container className='swhole'>
        <Container className='secondpage'>
            <Row className="justify-content-md-center">
                <Col className='what'>
                    What are you looking for?
                </Col>

            </Row>
            <Row>
                <Col xs={12} sm={6}><div className='wrap'><Button className='loanbutton '>Ask<br />Personal<br />Loan</Button></div></Col>
                <Col xs={12} sm={6}><div className='wrap'><Button className='loanbutton'>Give<br />Personal<br />Loan</Button></div></Col>

            </Row>
        </Container>


        <Container className='page'>
            <Row>
                <Col><img className="himages" src={build} alt="image" /></Col>
                <Col>

                    <Row>
                        <Col className="whyloan">
                            Why Loankart?
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                               <div className='flexit'>
                                <img className="icons" src={rate} alt="img" />
                                <div className='heading'>Lower Rates & Fees</div><br />
                                </div>
                                <div className='boxes'>
                                    Lower rates and fees<br />
                                    somewhere instantly<br />
                                    and shop anywhere<br />
                                </div>

                            </div>
                        </Col>
                        <Col>
                        <div className='flexit'>
                        <img className="icons" src={human} alt="" />
                        <div className='heading'>Human Touch</div><br />
                        </div>
                            <div className='boxes'>
                                Borrowing and Giving<br />
                                loans are now easy

                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='flexit'>
                            <img className="icons" src={gem} alt="img" /><t />
                            <div className='heading'>Speed and Ease</div><br />
                            </div>
                            <div className='boxes'>
                                Speed and easy tempor<br />
                            </div>
                        </Col>
                    </Row>





                </Col>
            </Row>

        </Container>

        <Container className='page'>
            <Row>
                <Col md={12} lg={6}>
                    <Row>
                        <Col className='howdoes'>
                           How does our <br/>process work
                        </Col>

                    </Row>
                    <Row>
                        <Col className='rateq'>
                             Login in our site
                        </Col>
                        <Col className='rateq'>
                             Complete your profile
                        </Col>
                    </Row>
                    <Row>
                        <Col className='rateq'>
                             Generate CIBIL score
                        </Col>
                        <Col className='rateq'>
                             Apply For Loan
                        </Col>
                    </Row>
                    <Row>
                        <Col className='rateq'>
                             Negotiate and close your deal
                        </Col>
                        
                    </Row>
                    
                </Col>




                <Col md={12} lg={6}><img className="himages" src={form} alt ="img"/></Col>
            </Row>
           
        </Container>
        </Container>
        </Container>

        <Container>
  
              <img className='footer' src={footer} alt="footer"/>
                
        </Container>
        









    </>
    , document.getElementById("root"));
































// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
