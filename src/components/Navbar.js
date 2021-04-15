import React from 'react';
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';


const Navbar_ = ( {handleLogout, user} ) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <h1>Com.Com</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/shoplist">장바구니</Nav.Link>
                        <NavDropdown title="용도별 구매" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Office">사무용 컴퓨터</NavDropdown.Item>
                            <NavDropdown.Item href="/Game">게임용 컴퓨터</NavDropdown.Item>
                            <NavDropdown.Item href="/Broadcast">방송용 컴퓨터</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/Purchasehistory">구매내역</Nav.Link>
                    </Nav>
                    {user ? (
                            <>안녕하세요</>
                        ) : (
                            <>로그인하세요</>
                        )}
                    <Nav className="ml-auto">
                        <div className = "btnContainer">
                        {user ? (
                            <><button type="button" class = "btn btn-danger" onClick={handleLogout}>로그아웃</button></>
                        ) : (
                            <><Nav.Link href="/login">로그인/회원가입</Nav.Link></>
                        )}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
};

export default Navbar_;