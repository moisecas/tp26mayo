import React from 'react' //rafece is react function component 
import { Container, Row, Col } from 'react-bootstrap'; 


const Footer = () => {
  return <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    copyright &copy; 2022 Techcenter Shop
                </Col>
            </Row>
        </Container>
    </footer>
  
}

export default Footer