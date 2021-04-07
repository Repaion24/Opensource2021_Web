import React from 'react';
import {Jumbotron,ListGroup} from 'react-bootstrap';//제목과 컴퓨터리스트 작성을 위한 import 했음

const Game = () => {
    return (
                                                //제목에 내용 넣고, 밑에 제품 리스트 나올 공간 만들었음
        <div>
        <Jumbotron className ="background">
            <h1>게임용 컴퓨터</h1>
            <p> 게임을 주로 한다면 그래픽카드와 RAM이 좋아야 이길 수 있죠!</p>
        </Jumbotron>

        <ListGroup variant="flush">
            <ListGroup.Item>이미지랑 사양이랑 내용</ListGroup.Item>
            <ListGroup.Item>이미지랑 사양이랑 내용</ListGroup.Item>
            <ListGroup.Item>이미지랑 사양이랑 내용</ListGroup.Item>
        </ListGroup>

        </div>
    );
};

export default Game;