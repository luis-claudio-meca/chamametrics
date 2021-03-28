import { ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faCalendarPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';


export default function AbasRodape() {
      
    const dashClick = () => {
        let i;
        var botoes = document.getElementsByTagName('a')
    
       for(i=0; i<botoes.length;i++){
           if(botoes[i].innerText =="dashboard")
                botoes[i].click()
       }
        
    }

    const inputClick = () => {
        let i;
        var botoes = document.getElementsByTagName('a')
      
       for(i=0; i<botoes.length;i++){
           if(botoes[i].innerText =="input")
                botoes[i].click()
       }
        
    }

    const perfilClick = () => {
        let i;
        var botoes = document.getElementsByTagName('a')
    
       for(i=0; i<botoes.length;i++){
           if(botoes[i].innerText =="user")
                botoes[i].click()
       }
        
    }

    return (
        <div>
            <style>
                {`
          .fade
          {
                  opacity: 0.7 !important;
                  
          }
          .fade:hover
          {
                  opacity: 1 !important;
                  transition: 1s;
          }`}
            </style>

            <ButtonGroup size="lg" className="mb-2 fade" style={{ width: "100%", position: 'fixed', top: '92%', minHeight: '70px' }}>
                <Button  onClick={dashClick} style={{ backgroundColor: '#000', boder: 'none', borderColor: '#f8f9fa33', fontSize: '10px' }}>
                <div className='d-flex align-items-center flex-column' style={{color: '#fff'}}>    
                        <FontAwesomeIcon icon={faTachometerAlt} style={{ width: "20px", height: '20px' }} />
                        <span>Painel</span> 
                </div>
                </Button>
                <Button onClick={inputClick} style={{ backgroundColor: '#000', boder: 'none', borderColor: '#f8f9fa33', fontSize: '10px' }}>
                <div className='d-flex align-items-center flex-column'>
                        <FontAwesomeIcon icon={faCalendarPlus} style={{ width: "20px", height: '20px' }} />
                        <span>Entradas</span>
                    </div>
                </Button>
                <Button onClick={perfilClick} style={{ backgroundColor: '#000', boder: 'none', borderColor: '#f8f9fa33', fontSize: '10px' }}>
                <div className='d-flex align-items-center flex-column'>
                        <FontAwesomeIcon icon={faUser} style={{ width: "20px", height: '20px' }} />
                        <span>Perfil</span>
                    </div>
                </Button>
            </ButtonGroup>
            <div style={{display: 'none'}}>
            <Link href="/Frequentadores">dashboard</Link>
            <Link href="/Input">input</Link>
            <Link href="/User">user</Link>
            </div>
        </div>
    );

}