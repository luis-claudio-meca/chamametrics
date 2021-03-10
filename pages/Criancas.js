import Cabecalho from '../components/Cabecalho';
import Head from 'next/head';
import { Card, Container, Jumbotron, Table } from 'react-bootstrap'
import AbasRodape from '../components/AbasRodape';


export default function Criancas() {
  return (
    <div>
      <Head>
        <link rel="manifest" href="/manifest/manifest.webmanifest"/> 
      </Head>
    <Cabecalho/>
    <h3 className="text-center" style={{color: 'yellow'}}>Crianças</h3>
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
                            <Card.Text style={{ color: 'yellow', fontSize: 25 }}> 5 </Card.Text>
                        </div><div className="d-flex justify-content-between align-items-center">
                            <Card.Title style={{ fontSize: 15 }}> Total</Card.Title>
                            <Card.Text style={{ color: 'yellow', fontSize: 25 }}> 15 </Card.Text>
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
                            <Card.Text style={{ color: 'yellow', fontSize: 25 }}> 10 </Card.Text>
                        </div><div className="d-flex justify-content-between align-items-center">
                            <Card.Title style={{ fontSize: 15 }}> Total</Card.Title>
                            <Card.Text style={{ color: 'yellow', fontSize: 25 }}> 45 </Card.Text>
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
                            <Card.Text style={{ color: 'yellow', fontSize: 25 }}> 7 </Card.Text>
                        </div><div className="d-flex justify-content-between align-items-center">
                            <Card.Title style={{ fontSize: 15 }}> Total</Card.Title>
                            <Card.Text style={{ color: 'yellow', fontSize: 25 }}> 88 </Card.Text>
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