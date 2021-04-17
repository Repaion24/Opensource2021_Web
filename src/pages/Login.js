import React from 'react';
import { Form, Button } from 'react-bootstrap';

//로그인 페이지

const login = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError,
        findpass
    } = props;

    return (
        <section className="login">
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>이메일</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    autoFocus
                    required
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    />
            </Form.Group>
            <p className = "errorMsg">{emailError}</p>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control
                    type="password" 
                    placeholder="Password" 
                    required
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    />
            </Form.Group>
            <p className = "errorMsg">{passwordError}</p>


            <div className = "btnContainer">
                {hasAccount ? (
                    <>
                    <button  size="lg" type="button" class = "btn btn-warning" onClick={handleSignup} block>회원가입</button>
                    <p>계정이 있으신가요 ? <span onClick={() => setHasAccount(!hasAccount)}><font color="green">로그인</font></span></p>
                    </>
                ) : (
                    <>
                    <button size="lg" type="button" class = "btn btn-success" onClick={handleLogin} block>로그인</button>
                    <p>계정이 없으신가요 ? <span onClick={() => setHasAccount(!hasAccount)}><font color="orange">회원가입</font></span></p>
                    </>
                )}
            </div>

            <button  size="lg" type="button" class = "btn btn-info" onClick={findpass} block>혹시 비밀번호를 까먹으셨나요?</button>
            <p>이메일을 입력하고 눌러주세요</p>
            
        </Form>
        </section>
    );
};

export default login;