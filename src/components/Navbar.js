import React from 'react';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';


const Navbar_ = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Com.Com</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/shoplist">장바구니</Nav.Link>
                        <NavDropdown title="용도별 구매" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">사무용 컴퓨터</NavDropdown.Item>
                            <NavDropdown.Item href="/game">게임용 컴퓨터</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">방송용 컴퓨터</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">전문가용 컴퓨터</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/login">로그인/회원가입</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
};

export default Navbar_;