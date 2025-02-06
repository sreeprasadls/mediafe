import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar className="bg-secondary">
                <Container>
                    <Navbar.Brand href="#home">
                    <li className="fa-solid fa-music"></li>
                        {' '}
                    
                        media player
                    </Navbar.Brand>
                </Container>
            </Navbar>

        </>
    )
}

export default Header