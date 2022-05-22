import { Row, Col, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './Home.css';

function Home() {
    return (
        <Row>
            <Col className='d-flex flex-direction-column align-items-center justify-content-center' md={6}>
                <div>
                    <h1>Investing,
                        together</h1>
                    <p>Bertemu, Diskusi dan Invest dengan teman-Mu di satu aplikasi</p>
                    <LinkContainer to='/chat'>
                        <Button variant='primary'>Get Started!
                            <i className='fas fa-comments home-message-icon'></i>
                        </Button>
                    </LinkContainer>
                </div>
            </Col>
            <Col md={6} className='home__bg'></Col>
        </Row>
    )
}

export default Home