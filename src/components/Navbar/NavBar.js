import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './NavBar.css'

function NavBar() {
    return (
        <>
            <Navbar bg="light" variant="light" className='shadow py-2'>
                <Container>
                    <Navbar.Brand className='brand' href="/">My Store</Navbar.Brand>
                    <Nav>
                        <Nav.Link className='nav' href="/cart"><Button variant="outline-dark">Cart</Button></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;