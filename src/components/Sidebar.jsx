import React from 'react'
import { ListGroup } from 'react-bootstrap';

function Sidebar() {
    const group = ['Engineering', 'Marketing', 'Finance', 'Operations'];
    return (
        <>
            <h3>Groups Chats</h3>
            <ListGroup>
                {group.map((item, index) => {
                    return (
                        <ListGroup.Item key={index}>{item}</ListGroup.Item>
                    )
                })}
            </ListGroup>
            <h3>Users</h3>

        </>
    )
}

export default Sidebar