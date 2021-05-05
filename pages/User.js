import Cabecalho from '../components/Cabecalho';
import Head from 'next/head';
import { Card, Container, Jumbotron, Table } from 'react-bootstrap'
import AbasRodape from '../components/AbasRodape';

export default function User() {
    return (
        <div>
            <Head>
                <link rel="manifest" href="/manifest/manifest.webmanifest" />
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/> 
            </Head>
            <Cabecalho />
            <h3 className="text-center" style={{ color: 'yellow' }}>Meu perfil</h3>
            <Container>
                <Jumbotron fluid style={{ padding: '1rem 1rem', minHeight: '5rem', width: '100%', backgroundColor: '#6c757e' }}>

                    <h1 style={{ fontSize: 15, color: '#fff' }}>Acesso: Admin</h1><hr />

                    <p style={{ fontSize: 14, color: 'yellow' }}>Nome: Richard Mattos</p>

                </Jumbotron>
            </Container>
            <AbasRodape />
        </div>
    )
}