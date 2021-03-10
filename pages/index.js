import Cabecalho from '../components/Cabecalho';
import  Head  from 'next/head';
import AbasRodape from '../components/AbasRodape';
import { Container, Jumbotron } from 'react-bootstrap';


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="manifest" href="/manifest/manifest.webmanifest"/> 
      </Head>
    <Cabecalho/>
    <Container style={{margin: '5rem auto'}}>
    <Jumbotron className="text-center">
    <img src="images/search.png" style={{width: 75 , height: 75}}/>
    <h2>Rastreie os dados</h2>
    <p>Rastreie a frequência, salvações, doações e muito mais para ajudar a tomar decisões ministeriais com dados reais.</p>
    </Jumbotron>
    </Container>
    <AbasRodape/>
    </div>
  )
}