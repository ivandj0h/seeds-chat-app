import React from 'react'
import {
    Col,
    Button,
    Form,
    FormControl,
    FormGroup,
    Row
} from 'react-bootstrap'

import './MessageForm.css'

function MessageForm() {

    function handleSubmitChat(e) {
        e.preventDefault()
        console.log('submit Chat!')
    }
    return (
        <>
            <div className='output-messages'></div>
            <Form onSubmit={handleSubmitChat}>
                <Row>
                    <Col md={11}>
                        <FormGroup>
                            <FormControl type='text' placeholder='Your Messages...'>

                            </FormControl>
                        </FormGroup>
                    </Col>
                    <Col md={1}>
                        <Button variant='primary' type='submit' style={{ width: '100%' }}>
                            <i className='fa fa-paper-plane'></i>
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default MessageForm