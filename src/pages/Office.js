import React from 'react';
import {Jumbotron,ListGroup} from 'react-bootstrap';  //제목과 컴퓨터리스트 작성을 위한 import 했음

const Office = () => {
    return (
                                                    //제목에 내용 넣고, 밑에 제품 리스트 나올 공간 만들었음
    <div>                                              
        <Jumbotron className ="background">
            <h1>사무용 컴퓨터</h1>
            <p> 게임도 안하고 영화도 안보는데 문서 작업만 한다면 가벼운 사양의 컴퓨터가 제격!</p>
        </Jumbotron>
           
        <ListGroup variant="flush">
            <ListGroup.Item>
                   
                <img src={process.env.PUBLIC_URL + '/test_image.png'} width = '150' height='150' alt="test_image" />
                상세 사양
                CPU : i5-5000
                RAM : 4GB
                POWER : 300W
                {/* 위의 이미지는 public폴더에 있습니다. public에서 이미지를 가져오려면 process.env.PUBLIC_URLL을 사용해야된다덥니다. */}
                {/* 그리고 주석 단축키는 주석처리할 문장 앞 커서에서 ctrl + / 입니다. 이거 편함 by 차재현 21-04-08*/}
                {/* 그리고 지금 이미지만 나오고 우측에 사양같은거도 쓰려고하는데 못찾았습니다 잉? 되네? 그래도 위치설정 할 수 있어야 됨*/}
            </ListGroup.Item>
            <ListGroup.Item>     
                 <img src={process.env.PUBLIC_URL + '/test_image.png'} width = '150' height='150' alt="test_image" />
            </ListGroup.Item>
            <ListGroup.Item>                
                <img src={process.env.PUBLIC_URL + '/test_image.png'} width = '150' height='150' alt="test_image" />
            </ListGroup.Item>
        </ListGroup>
        
        
    
    
    </div>


   
  

    
    );
};

export default Office;