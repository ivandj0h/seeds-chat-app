import { useState } from 'react';
import {
    Row,
    Col,
    Form,
    Button,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Signup.css';
import defaultImg from '../assets/defaultImg.png'


function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);
    const [uploadinImg, setUploadingImg] = useState(false);
    const [previewImg, setPreviewImg] = useState(null);

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

    async function uploadImage() {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'ivandjoh');
        try {
            setUploadingImg(true);

            let res = await fetch('https://api.cloudinary.com/v1_1/ivandjoh/image/upload', {
                method: 'POST',
                body: data
            })

            let resData = await res.json();
            setUploadingImg(false);
            return resData.url;
        } catch (error) {
            setUploadingImg(false);
            console.log(error);
        }
    }

    async function handleSignUp(e) {
        e.preventDefault();
        if (!image) return alert('Please upload Your image!');
        const url = await uploadImage(image);
        console.log(url);
    }

    return (
        <Row>
            <Col md={6} className='d-flex flex-direction-column align-items-center justify-content-center'>
                <Form style={{ marginTop: '20px', width: '80%', maxWidth: '500' }} onSubmit={handleSignUp}>
                    <Row className='d-flex align-items-center justify-content-center' style={{ marginBottom: '30px' }}>
                        <Col md={2} className='flex-item'>
                            <img src={previewImg || defaultImg} alt='preview' className='signup-profile-pic' />
                        </Col>
                        <Col md={10} style={{ margin: '0' }}>
                            <h3 className='text-muted'>Create New Chat Account</h3>
                            <Row>
                                <Col md={12}>
                                    <input variant="success" id='image-upload' type='file' className='image-upload' accept='image/png, image/jpg' onChange={validateImg} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Control type="username" placeholder="Enter Full Name" onChange={e => setUsername(e.target.value)} value={username} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} />
                    </Form.Group>
                    <Col md={12}>
                        <Button variant="success" type="submit">{uploadinImg ? 'Processing...' : 'Create Account'}</Button>
                    </Col>
                    <div>
                        <p className='text-left text-muted mt-3'>Already have Account? <Link to='/login'>Login</Link></p>
                    </div>
                </Form>
            </Col>
            <Col md={6} className='signup__bg'></Col>
        </Row>
    )
}

export default Signup