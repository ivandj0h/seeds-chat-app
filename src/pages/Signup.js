import {
    Row,
    Col,
    Form,
    Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Signup.css';

function Signup() {
    return (
        <Row>
            <Col md={6} className='d-flex flex-direction-column align-items-center justify-content-center'>
                <Form style={{ marginTop: '20px', width: '80%', maxWidth: '500' }}>
                    <Form.Text className="text-muted">
                        Please Signup first.
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
                        Signup
                    </Button>
                    <div>
                        <p className='text-left text-muted mt-3'>Already have Account? <Link to='/login'>Login</Link></p>
                    </div>
                </Form>
            </Col>
            <Col md={6} className='login__bg'></Col>
        </Row>
    )
}

export default Signup