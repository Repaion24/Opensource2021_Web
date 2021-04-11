import React from 'react';
import {Jumbotron,Button } from 'react-bootstrap';
import { useHistory} from 'react-router-dom'
import More from './More'
const Home = () => {

    let history = useHistory();

    return (
        <Jumbotron className ="background">
            <h1>Com.Com</h1>
            <p> 컴퓨터 지식을 모르는 사람도 사용하기 쉬운 웹사이트</p>
            <p><Button onClick={()=>{history.push('/More')}} variant="primary">더 알아보기</Button></p>

        </Jumbotron>

      
    );
};

export default Home;