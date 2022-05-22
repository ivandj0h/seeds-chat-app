import React from 'react'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import Sidebar from '../components/Sidebar'

function Chat() {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Sidebar />
                </Col>
                <Col md={6}>
                    <MessageForm />
                </Col>
            </Row>
        </Container>
    )
}

export default Chat