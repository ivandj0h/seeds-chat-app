import {
    Row,
    Col,
    Form,
    Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Login.css';

function Login() {
    return (
        <Row>
            <Col md={6} className='d-flex flex-direction-column align-items-center justify-content-center'>
                <Form style={{ marginTop: '20px', width: '80%', maxWidth: '500' }}>
                    <Form.Text className="text-muted">
                        Please Login into Your Account.
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <div>
                        <p className='text-left text-muted mt-3'>Don't have Account yet? <Link to='/signup'>Signup</Link></p>
                    </div>
                </Form>
            </Col>
            <Col md={6} className='login__bg'>Left</Col>
        </Row>
    )
}

export default Login