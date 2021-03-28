import Cabecalho from '../components/Cabecalho';
import Head from 'next/head';
import { Container, Jumbotron, InputGroup, FormControl, Button } from 'react-bootstrap'
import AbasRodape from '../components/AbasRodape';
import $ from 'jquery';
const Swal = require('sweetalert2');






export default function Input() {

    function submmit() {
        let obj = {
            frequentadores: document.getElementById("frequentadores").value,
            visitantes: document.getElementById("visitantes").value,
            voluntarios: document.getElementById("voluntarios").value,
            criancas: document.getElementById("criancas").value,
            decididos: document.getElementById("decididos").value,
            launch: document.getElementById("launch").value,
            data: document.getElementById("data").value,
            evento: document.getElementById("evento").value
        };
        if (obj.frequentadores == '' || obj.visitantes == '' || obj.voluntarios == '' || obj.criancas == ''
            || obj.decididos == '' || obj.launch == '' || obj.data == '' || obj.evento == '') {
            Swal.fire({
                title: 'Inválido!',
                text: 'Preencha os campos vazios!',
                type: 'warning',
                confirmButtonText: 'OK!'
            })
        } else {

            $.ajax({
                method: "POST",
                url: "http://localhost:3003/culto/register",
                data: obj,
                success: function () {

                }
            })
            Swal.fire({
                title: 'Salvo!',
                text: 'Dados salvos com sucesso',
                type: 'success',
                timer: 3000,
                showConfirmButton: false,
            }).then(() => {
                location.href="/Input";
            })
        }

    }


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
                        <input type="number" class="form-control" id="voluntarios" />
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
                            <InputGroup.Text >Evento</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            id="evento"
                            aria-label="Default"
                            as="textarea"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text >Data</InputGroup.Text>
                        </InputGroup.Prepend>
                        <input type="date" class="form-control" id="data" />
                    </InputGroup>

                </Jumbotron>
                <Button id="adicionar" onClick={submmit} variant="primary" size="lg" block style={{ marginBottom: '5rem' }}>
                    Salvar
                </Button>
            </Container>
            <AbasRodape />
        </div>
    )
}