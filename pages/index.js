import Cabecalho from '../components/Cabecalho';
import  Head  from 'next/head';


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="manifest" href="/manifest/manifest.webmanifest"/>
      </Head>
    <Cabecalho/>
    </div>
  )
}