import React from 'react';
import { Form, Button } from 'react-bootstrap';

//로그인 페이지

const login = () => {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>이메일</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button size="lg" variant="primary" type="submit" block>
                로그인
            </Button>
            <Form.Text className="text-muted">
                    아직 회원이 아니신가요?
            </Form.Text>
            <Button href="/Signup" size="lg" variant="danger" block>
                회원가입
            </Button>
        </Form>
    );
};

export default login;