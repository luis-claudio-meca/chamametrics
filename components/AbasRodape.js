import { ButtonGroup, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faCalendarPlus, faUser } from '@fortawesome/free-solid-svg-icons'






export default function AbasRodape() {
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
                <Button style={{ backgroundColor: '#000', boder: 'none', borderColor: '#f8f9fa33', fontSize: '10px' }}>
                    <div className='d-flex align-items-center flex-column'>
                        <FontAwesomeIcon icon={faTachometerAlt} style={{ width: "20px", height: '20px' }} />
                        <span>Painel</span>
                    </div>
                </Button>
                <Button style={{ backgroundColor: '#000', boder: 'none', borderColor: '#f8f9fa33', fontSize: '10px' }}>
                <div className='d-flex align-items-center flex-column'>
                        <FontAwesomeIcon icon={faCalendarPlus} style={{ width: "20px", height: '20px' }} />
                        <span>Entradas</span>
                    </div>
                </Button>
                <Button style={{ backgroundColor: '#000', boder: 'none', borderColor: '#f8f9fa33', fontSize: '10px' }}>
                <div className='d-flex align-items-center flex-column'>
                        <FontAwesomeIcon icon={faUser} style={{ width: "20px", height: '20px' }} />
                        <span>Perfil</span>
                    </div>
                </Button>
            </ButtonGroup>
        </div>
    )
}