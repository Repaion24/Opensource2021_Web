import React, {useState} from 'react';
import {Jumbotron,Button,ListGroup } from 'react-bootstrap';
import { useHistory} from 'react-router-dom'
import More from './More'
import Modal from '../components/Modal';

const Home = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    let history = useHistory();

    return (
        <div>
        <Jumbotron className ="background">
            <h1>Com.Com에서 자신만의 컴퓨터를 찾으세요!</h1>
            <span> 컴퓨터 지식을 모르는 사람도 사용하기 쉬운 웹사이트</span>
            <p><Button onClick={()=>{history.push('/More')}} variant="primary">더 알아보기</Button></p>

        </Jumbotron>
         지금 이 사이에 체크박스 넣으면 돼 (제조사, 부품종류)
        <ListGroup variant="flush">
        <ListGroup.Item>이미지랑 사양이랑 내용</ListGroup.Item>
        <ListGroup.Item>이미지랑 사양이랑 내용</ListGroup.Item>
        <ListGroup.Item>이미지랑 사양이랑 내용</ListGroup.Item>
        </ListGroup>

        
        <script src="/__/firebase/8.4.1/firebase-app.js"></script>

        <script src="/__/firebase/8.4.1/firebase-analytics.js"></script>


        <script src="/__/firebase/init.js"></script>
      </div>
      
    );
};

export default Home;