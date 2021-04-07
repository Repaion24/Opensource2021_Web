import React from 'react';
import {Jumbotron,ListGroup} from 'react-bootstrap';//제목과 컴퓨터리스트 작성을 위한 import 했음

const Broadcast = () => {
    return (
                                                     //제목에 내용 넣고, 밑에 제품 리스트 나올 공간 만들었음
        <div>
        <Jumbotron className ="background">
            <h1>방송용 컴퓨터</h1>
            <p> 방송하는 동안 사용하는 많은 프로그램은 CPU와 RAM이 처리할거에요!  </p>
        </Jumbotron>

        <ListGroup variant="flush">
            <ListGroup.Item>이미지랑 사양이랑 내용</ListGroup.Item>
            <ListGroup.Item>이미지랑 사양이랑 내용</ListGroup.Item>
            <ListGroup.Item>이미지랑 사양이랑 내용</ListGroup.Item>
        </ListGroup>

        </div>
    );
};

export default Broadcast;