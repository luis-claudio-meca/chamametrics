import Cabecalho from '../components/Cabecalho';
import Head from 'next/head';
import { Container, Jumbotron, InputGroup, FormControl, Button } from 'react-bootstrap'
import AbasRodape from '../components/AbasRodape';

export default function Input() {
    return (
        <div>
            <Head>
                <link rel="manifest" href="/manifest/manifest.webmanifest" />
            </Head>
            <Cabecalho />
            <h3 className="text-center" style={{ color: 'yellow' }}>Relatórios</h3>
            <Container>
                <Jumbotron fluid style={{ padding: '1rem 1rem', minHeight: '10rem', width: '100%', backgroundColor: '#6c757e' }}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text >Frequentadores</InputGroup.Text>
                        </InputGroup.Prepend>
                        <input type="number" class="form-control" id="frequentadores" placeholder="Valor aqui..." />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text >Visitantes</InputGroup.Text>
                        </InputGroup.Prepend>
                        <input type="number" class="form-control" id="visitantes" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text >Voluntários</InputGroup.Text>
                        </InputGroup.Prepend>
                        <input type="number" class="form-control" id="voluntários" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text >Crianças</InputGroup.Text>
                        </InputGroup.Prepend>
                        <input type="number" class="form-control" id="criancas" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Decididos</InputGroup.Text>
                        </InputGroup.Prepend>
                        <input type="number" class="form-control" id="decididos" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text >Launch</InputGroup.Text>
                        </InputGroup.Prepend>
                        <input type="number" class="form-control" id="launch" />
                    </InputGroup>
                </Jumbotron>
            </Container>
            <Container>
                <Jumbotron fluid style={{ padding: '1rem 1rem', minHeight: '10rem', width: '100%', backgroundColor: '#6c757e' }}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="evento">Evento</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Default"
                            as="textarea"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="data">Data</InputGroup.Text>
                        </InputGroup.Prepend>
                        <input type="date" class="form-control" id="data" placeholder="Password" />
                    </InputGroup>

                </Jumbotron>
                <Button id="adicionar" variant="primary" size="lg" block style={{marginBottom: '5rem'}}>
                    Salvar
                </Button>
            </Container>
            <AbasRodape />
        </div>
    )
}