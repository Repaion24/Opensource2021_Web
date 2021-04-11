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
            <ListGroup.Item>
            <table class = "table table-hover" >
                    <tr>
                      <td class="pricewidth" rowspan = "4"> 
                      <img src={process.env.PUBLIC_URL + '/test_image.png'} width = '200' height='200' alt="test_image" />
                      </td>
                      <td colspan = "3">
                      <h4>상세 사양</h4>
                      </td>
                    </tr>
                    <tr>
                        <td>CPU : i5-5000</td>
                        <td>RAM : 32GB</td>
                        <td>MainBoard : H410M-H</td>
                    </tr>
                    <tr>
                        <td>GPU : gtx3090</td>
                        <td colspan = "2">POWER : 300W</td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <div class="container">
                                <div class="row">
                                    <div class="col-7">
                                      <h2>가격 : 350,000 </h2>
                                    </div>
                                    <div class="col-2">
                                    <button type="button" class="btn btn-outline-primary">구매하기</button>
                                    </div>
                                    <div class="col-3">
                                    <button type="button" class="btn btn-outline-warning">장바구니 추가</button>
                                    </div>
                                </div>
                            </div>                     
                        </td>
                      
                    </tr>
                </table>
                
            </ListGroup.Item>
            <ListGroup.Item>이미지랑 사양이랑 내용</ListGroup.Item>
            <ListGroup.Item>이미지랑 사양이랑 내용</ListGroup.Item>
        </ListGroup>

        </div>
    );
};

export default Game;