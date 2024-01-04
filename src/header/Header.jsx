 import '../header/sHeader.css'
import Logo from '../logo/logo'
import A from '../linkTag/A'
import { Container,Row,Col } from 'react-bootstrap'
import Button from '../greenB/Button'


export default function Header()
{return(
    <header>
        <Container>
            <Row className='justify-content-between mt-2 pt-2'>
                <Col md={2} >
                    <Logo></Logo>
                </Col>
                <Col md={8}>
                <div className="d-flex justify-content-evenly align-items-center list-menu ">
                    <A link=''>Главная</A>
                    <A link='//'>Про гида</A>
                    <A link=''>Программа тура</A>
                    <A link=''>Стоимость</A>
                    <A link=''>Блог</A>
                    <A link=''>Контакты</A>
                    <Button>
                    Консультация
                    </Button>
                </div>
                </Col>   
            </Row>
        </Container>
    </header>
)} 