import React, {useState} from 'react';
import {Jumbotron,ListGroup} from 'react-bootstrap';//제목과 컴퓨터리스트 작성을 위한 import 했음
import Modal from '../components/Modal';

const Broadcast = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
                                                     //제목에 내용 넣고, 밑에 제품 리스트 나올 공간 만들었음
        <div>
        <Jumbotron className ="background">
            <h1>방송용 컴퓨터</h1>
            <p> 방송하는 동안 사용하는 많은 프로그램은 CPU와 RAM이 처리할거에요!  </p>
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
                        <td>CPU : i7-9700</td>
                        <td>RAM : 16GB</td>
                        <td>MainBoard : H410M-H</td>
                    </tr>
                    <tr>
                        <td>GPU : gtx1660</td>
                        <td colspan = "2">POWER : 500W</td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <div class="container">
                                <div class="row">
                                    <div class="col-7">
                                      <h2>가격 : 350,000 </h2>
                                    </div>
                                    <div class="col-2">
                                    <React.Fragment>
                                                <button type="button" class="btn btn-outline-primary" onClick={openModal}>구매하기</button>
                                                <Modal open={modalOpen} close={closeModal} header="구매 페이지"></Modal>
                                                {/* header 부분에 텍스트를 입력한다. */}
                                                
                                                {/* Modal.js <main> { props.children } </main>에 내용이 입력된다.  */}
                                            </React.Fragment>
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

export default Broadcast;