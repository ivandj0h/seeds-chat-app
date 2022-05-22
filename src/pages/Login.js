import { useState } from 'react';
import {
    Row,
    Col,
    Form,
    Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <Row>
            <Col md={6} className='d-flex flex-direction-column align-items-center justify-content-center'>
                <Form style={{ marginTop: '20px', width: '80%', maxWidth: '500' }} onSubmit={handleLogin}>
                    <Row className='d-flex align-items-center justify-content-center' style={{ marginBottom: '30px' }}>
                        <Col md={12} style={{ margin: '0' }}>
                            <h3 className='text-muted'>Login into Chat Account</h3>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email} required autoComplete='off' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} required />
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