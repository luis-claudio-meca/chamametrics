import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import Link from 'next/link';

const Cabecalho = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <style>
                {`
                .sobre a{
                    font-family: "Times New Roman", Times, serif;
                    font-weight: bold;
                    color: #fff !important;
                    margin-right: 1rem;
                }
                .drop{
                    background-color: #adb5bd;
                }
                .titu a{
                    font-family: "Times New Roman", Times, serif;
                    font-weight: bold;
                    font-size: 1.25rem;
                    color: #fff !important;
                }`}
            </style>
            <Navbar expand="lg" bg="dark">
                <Navbar.Brand className="titu"><img src="images/chama.jpg" style={{width: 25 , height: 25, borderRadius: 20}}/>
                <Link href="/"> Chama Metrics</Link></Navbar.Brand>
                <Navbar.Toggle onClick={toggle} aria-controls="basic-navbar-nav" className="drop"/>
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Container className="d-flex justify-content-center">
                    <Nav className="sobre">
                        <Link href="/Frequentadores">Frequentadores</Link>
                        <Link href="/Visitantes">Visitantes</Link>
                        <Link href="/Voluntarios">Voluntários</Link>
                        <Link href="/Criancas">Crianças</Link>
                        <Link href="/Decididos">Decididos</Link>
                        <Link href="/Launch">Conection</Link>
                    </Nav>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Cabecalho;