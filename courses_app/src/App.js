import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import Addcourses from './components/Addcourses';
import Header from './components/Header';
import Menus from './components/Menus';
import { BrowserRouter as router, Route } from 'react-router-dom'; 

function App() {

  const btnHandle=()=>{
    toast.success("done",{
      position:"top-center"
    });
  };
  return (
    <div>
       <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
               <Home />
            </Col>
          </Row>
        </Container> 
    </div>
  );
}

export default App;
