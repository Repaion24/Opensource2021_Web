import React from 'react';
import { Form, Button } from 'react-bootstrap';



const Signup = () => {
    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>이름</Form.Label>
                <Form.Control placeholder="Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>아이디(이메일 형식)</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>비밀번호 확인</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button size="lg" variant="primary" type="submit" block>
                회원가입
            </Button>
        </Form>
    );
};

export default Signup;