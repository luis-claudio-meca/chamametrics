import Cabecalho from '../components/Cabecalho';
import Head from 'next/head';
import { Card, Container, Jumbotron, Table } from 'react-bootstrap'
import AbasRodape from '../components/AbasRodape';
import React from 'react';
import axios from 'axios';
import $ from 'jquery';

export default function Decididos() {
    function Dados(){
        axios.get("http://93.188.165.41/API-ChamaMetrics/all")
          .then(res => {
            const geral = res.data;
         
                Hoje(geral);
                EssaSemana(geral);
                LastSemana(geral);
                UltimoLastSemana(geral);
                UltimoMes(geral);
                TotalMes(geral);
          })
    }
    Dados();
   
  
    function Hoje(data){
        let now = new Date();
        let hj;

        if(now.getMonth()<10 && now.getDate()<10)
         hj = now.getFullYear()+'-0'+ (now.getMonth()+1)+'-0'+now.getDate();
        else if(now.getMonth()<10)
         hj = now.getFullYear()+'-0'+ (now.getMonth()+1)+'-'+now.getDate();
        else if(now.getDate()<10)
         hj = now.getFullYear()+'-'+ (now.getMonth()+1)+'-0'+now.getDate();
        else
         hj = now.getFullYear()+'-'+ (now.getMonth()+1)+'-'+now.getDate();

       


        let conthj =0;
        data.forEach(element=>{
         
            if(element.data == hj)
                conthj+= +element.decididos; 
                
        })
        $("#hj").html( conthj );
    }

    function EssaSemana(data){

        var curr = new Date(); // get current date 
        var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week 
        let firstday;
        let lastday;
        let cont =0;

        firstday = new Date(curr.setDate(first)).toUTCString();
        for(let i=0;i<7;i++){
         
         
        lastday = new Date(curr.setDate(curr.getDate()+i)).toUTCString();
        
            data.forEach(element=>{
            
                if(new Date(element.data).toUTCString().substr(0, 16) == lastday.substr(0, 16))
                    cont+= +element.decididos; 
            })
    }
       $("#weektotal").html( cont );
    }

    function LastSemana(data){

        var curr = new Date(); 
        var first = curr.getDate()-1 - curr.getDay(); 
        var newcurr = new Date(curr.getFullYear()+'-'+(curr.getMonth()+1)+'-'+first);
        first = newcurr.getDate() - newcurr.getDay();
        let firstday;
        let lastday;
        let cont =0;

        firstday = new Date(newcurr.setDate(first));
       
        for(let i=0;i<7;i++){

            lastday = new Date(newcurr.setDate(firstday.getDate()+i)).toUTCString();
           data.forEach(element=>{
           

               if(new Date(element.data).toUTCString().substr(0, 16) == lastday.substr(0, 16))
                  cont+= +element.decididos;

          })
          first = newcurr.getDate() - newcurr.getDay();
          firstday = new Date(newcurr.setDate(first));
   }
      $("#lastweektotal").html( cont );
    }

    function UltimoLastSemana(data){

        var curr = new Date(); 
        var first = curr.getDate()-1 - curr.getDay(); 
        let firstday;
        let lastday;
        let cont =0;

        firstday = new Date(curr.setDate(first));
       
        for(let i=0;i<7;i++){

            lastday = new Date(curr.setDate(firstday.getDate())).toUTCString();
           data.forEach(element=>{
           
               if(new Date(element.data).toUTCString().substr(0, 16) == lastday.substr(0, 16))
                  cont=+element.decididos;

          })
          if(cont)
            break;
          first --;
          firstday = new Date(curr.setDate(first));
   }
      $("#ultimolastweek").html( cont );
    }

    function UltimoMes(data){

        var curr = new Date(); 
        var first = curr.getDate(); 
        let firstday;
        let lastday;
        let cont =0;

        firstday = new Date(curr.setDate(first));
       
        for(let i=0;i<7;i++){

            lastday = new Date(curr.setDate(firstday.getDate())).toUTCString();
           data.forEach(element=>{
           
               if(new Date(element.data).toUTCString().substr(0, 16) == lastday.substr(0, 16))
                  cont= +element.decididos;

          })
          if(cont)
            break;
          first --;
          firstday = new Date(curr.setDate(first));
   }
      $("#ultimomounth").html( cont );
    }
    function TotalMes(data){

        var curr = new Date(); 
        let cont =0;
        
           data.forEach(element=>{
               if(new Date(element.data).getMonth() == curr.getMonth() && new Date(element.data).getFullYear() == curr.getFullYear() );
                  cont+= +element.decididos;
          })      
         
      $("#totalmounth").html( cont );
    }

    return (
        <div>
            <Head>
                <link rel="manifest" href="/manifest/manifest.webmanifest" />
            </Head>
            <Cabecalho />
            <h3 className="text-center" style={{color: 'yellow'}}>Decididos</h3>
            <Container className="d-flex justify-content-center mt-2">          
                <Card
                    bg="dark"
                    text='white'
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header className="text-center">Essa Semana</Card.Header>
                    <Card.Body style={{ height: '5rem', padding: '0.25rem 1rem' }}>
                        <div className=" d-flex justify-content-between align-items-center">
                            <Card.Title style={{ fontSize: 15 }}> Reportado Hoje</Card.Title>
                            <Card.Text id="hj" style={{ color: 'yellow', fontSize: 25 }}> 5 </Card.Text>
                        </div><div className="d-flex justify-content-between align-items-center">
                            <Card.Title style={{ fontSize: 15 }} > Total</Card.Title>
                            <Card.Text style={{ color: 'yellow', fontSize: 25 }} id="weektotal"> 15 </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="d-flex justify-content-center mt-2">
                <Card
                    bg="dark"
                    text='white'
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header className="text-center">Semana Anterior</Card.Header>
                    <Card.Body style={{ height: '5rem', padding: '0.25rem 1rem' }}>
                        <div className=" d-flex justify-content-between align-items-center">
                            <Card.Title style={{ fontSize: 15 }}> Último Reporte</Card.Title>
                            <Card.Text style={{ color: 'yellow', fontSize: 25 }} id="ultimolastweek"> 10 </Card.Text>
                        </div><div className="d-flex justify-content-between align-items-center">
                            <Card.Title style={{ fontSize: 15 }}> Total</Card.Title>
                            <Card.Text style={{ color: 'yellow', fontSize: 25 }} id="lastweektotal"> 45 </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
            <Container className="d-flex justify-content-center mt-2">
                <Card
                    bg="dark"
                    text='white'
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header className="text-center">Esse Mês</Card.Header>
                    <Card.Body style={{ height: '5rem', padding: '0.25rem 1rem' }}>
                        <div className=" d-flex justify-content-between align-items-center">
                            <Card.Title style={{ fontSize: 15 }}> Último Reporte</Card.Title>
                            <Card.Text style={{ color: 'yellow', fontSize: 25 }} id="ultimomounth"> 7 </Card.Text>
                        </div><div className="d-flex justify-content-between align-items-center">
                            <Card.Title style={{ fontSize: 15 }}> Total</Card.Title>
                            <Card.Text style={{ color: 'yellow', fontSize: 25 }} id="totalmounth"> 88 </Card.Text>
                        </div>
                    </Card.Body>
                </Card>
            </Container>

            <Jumbotron fluid style={{ padding: '1rem 1rem', minHeight: '10rem', width: '100%', backgroundColor: '#6c757e' }}>
                <Container style={{ padding: '0rem 0rem' }}>
                    <h1 style={{ fontSize: 18, color: '#fff' }}>Últimos Reportes</h1><hr />
                </Container>

                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr className="text-center">
                            <th>Dia</th>
                            <th>Culto</th>
                            <th>Esse Mes</th>
                            <th>Mes Passado</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>10/03/21</td>
                            <td>Culto da Familia</td>
                            <td>5</td>
                            <td>32</td>
                        </tr>
                        <tr>
                            <td>13/03/21</td>
                            <td>Culto da Mulher</td>
                            <td>25</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>13/03/21</td>
                            <td>Culto da Mulher</td>
                            <td>25</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>13/03/21</td>
                            <td>Culto da Mulher</td>
                            <td>25</td>
                            <td>98</td>
                        </tr>
                    </tbody>
                </Table>
            </Jumbotron>
            <AbasRodape />
    </div>
  )
}