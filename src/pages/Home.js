import React from 'react';
import {Jumbotron,Button } from 'react-bootstrap';

const Home = () => {
    return (
        <Jumbotron className ="background">
            <h1>Com.Com</h1>
            <p> 컴퓨터 지식을 모르는 사람도 사용하기 쉬운 웹사이트</p>
            <p><Button variant="primary">더 알아보기</Button></p>
        </Jumbotron>

    );
};

export default Home;