import Cabecalho from '../components/Cabecalho';
import Head from 'next/head';
import React, { useState } from 'react';
import AbasRodape from '../components/AbasRodape';
import { Container, Jumbotron, InputGroup, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import $ from 'jquery';

export default function Home() {


    const [modalShow, setModalShow] = React.useState(false);

    const handleClose = () => { setModalShow(false) }
    const handleShow = () => { setModalShow(true); MyVerticallyCenteredModal() }



    const Copy = () => {
        let text = document.getElementsByClassName("relatoriocopy");
        let textArea = document.getElementById('textcopy');
        textArea.value = text[0].innerText;
        textArea.select();
        document.execCommand('copy');
    }



    function MyVerticallyCenteredModal() {
        
        
            let dado = document.getElementById("data");
            
            $.ajax({
                url: "http://93.188.165.41/API-ChamaMetrics/relatorio",
                method: "post",
                data : {data : dado.value},
                dataType: "JSON",     
        
                success: function (res){
                 
                    res.forEach(element => {
                        document.getElementById("root-1").innerHTML = `
                           <h2 > Relatório dia `+ dado.value +`</h2>
                           <p>Total de pessoas: <strong> `+element.total+` </strong></br >
                            Visitantes: <strong> `+element.visitantes+` </strong><br>
                            Decididos: <strong> `+element.decididos+` </strong><br>
                             Conection: <strong> `+element.launch+` </strong><br>
                            Crianças: <strong>  `+element.criancas+` </strong><br>
                            voluntários: <strong> `+element.voluntarios+` </strong><br>
                            Frequentadores: <strong>  `+element.frequentadores+` </strong><br>
                            Chama - Online: <strong> 500 </strong>
                            </p>        
                            `;
                    });  
                }
            })
    }







    return (<div>
        <Head>
                <link rel="manifest" href="/manifest/manifest.webmanifest" />
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/> 
            </Head>
        <Cabecalho />

        <Container style={{ margin: '1.75rem auto' }} >
            <Jumbotron className="text-center" >
                <img src="images/search.png"
                    style={
                        { width: 75, height: 70 }} />
                <h2> Rastreie os dados </h2>
                <p> Rastreie a frequência, salvações, doações e muito mais para ajudar a tomar decisões ministeriais com dados reais. </p>
            </Jumbotron>
            <Jumbotron className="text-center"
                style={
                    { margin: '-1rem auto' }}>
                <h2> Gerar Relatório </h2>
                <InputGroup className="mt-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text >Data</InputGroup.Text>
                    </InputGroup.Prepend>
                    <input type="date" class="form-control" id="data" />
                    <Button id="adicionar"
                        onClick={handleShow}
                        variant="success"
                        size="lg"
                        block style={
                            { marginTop: '1rem' }}>
                        Gerar
                    </Button>
                </InputGroup>
            </Jumbotron>
        </Container>
        <AbasRodape />


        <Modal show={modalShow}
            size="md"
            animation={false}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header  >
                <Modal.Title id="contained-modal-title-vcenter" >
                    Chama Metrics
        </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Jumbotron className="text-center relatoriocopy"
                    id='geradados' >

                    <textarea id="textcopy"
                        style={
                            { opacity: '0' }} > </textarea>
                    <span id="root-1"><h2 > Nenhum relatório encontrado!  </h2></span>

                    <Button id="copy"
                        style={
                            { width: 45, height: 45, margin: -15, padding: 0, backgroundColor: '#b8b9ba', opacity: '0.6', float: 'right', borderColor: 'transparent' }} >
                        <img src="images/copy.png"
                            onClick={Copy}
                            style={
                                { width: 35, height: 35, margin: 0 }} />
                    </Button>

                </Jumbotron>
            </Modal.Body>
            <Modal.Footer >
                <Button onClick={handleClose} > Close </Button>
            </Modal.Footer>
        </Modal>
    </div >
    )


}