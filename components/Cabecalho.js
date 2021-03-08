import { Navbar, Nav } from 'react-bootstrap';
import React, { useState } from 'react';
const Cabecalho = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <style>
                {`
                .sobre{
                    font-family: "Times New Roman", Times, serif;
                    font-weight: bold;
                    color: #fff !important;
                }
                .drop{
                    background-color: #adb5bd;
                }`}
            </style>
            <Navbar expand="lg" bg="dark">
                <Navbar.Brand href="#home" className="sobre">Chama Metrics</Navbar.Brand>
                <Navbar.Toggle onClick={toggle} aria-controls="basic-navbar-nav" className="drop"/>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav>
                        <Nav.Link href="#home" className="sobre">Frequentadores</Nav.Link>
                        <Nav.Link href="#link" className="sobre">Visitantes</Nav.Link>
                        <Nav.Link href="#link" className="sobre">Voluntários</Nav.Link>
                        <Nav.Link href="#link" className="sobre">Crianças</Nav.Link>
                        <Nav.Link href="#link" className="sobre">Decididos</Nav.Link>
                        <Nav.Link href="#link" className="sobre">Launch</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Cabecalho;