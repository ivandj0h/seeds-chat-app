import { useState } from 'react';
import {
    Row,
    Col,
    Form,
    Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Login.css';
import defaultImg from '../assets/defaultImg.png'

function Login() {
    const [previewImg, setPreviewImg] = useState(null);
    const [image, setImage] = useState(null);

    function validateImg(e) {
        const file = e.target.files[0];
        if (file.size >= 1048576) {
            alert('Image size should be less than 1MB');
            return false;
        }
        if (file.type !== 'image/png' && file.type !== 'image/jpg') {
            alert('Image should be in png or jpg format');
            return false;
        }
        setImage(file);
        setPreviewImg(URL.createObjectURL(file));
    }

    return (
        <Row>
            <Col md={6} className='d-flex flex-direction-column align-items-center justify-content-center'>
                <Form style={{ marginTop: '20px', width: '80%', maxWidth: '500' }}>
                    <Row className='d-flex align-items-center justify-content-center' style={{ marginBottom: '30px' }}>
                        <Col md={2} className='flex-item'>
                            <img src={previewImg || defaultImg} alt='preview' className='signup-profile-pic' />
                        </Col>
                        <Col md={10} style={{ margin: '0' }}>
                            <h3 className='text-muted'>Login into Chat Account</h3>
                            <Row>
                                <Col md={12}>
                                    <input variant="success" id='image-upload' type='file' className='image-upload' accept='image/png, image/jpg' onChange={validateImg} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
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