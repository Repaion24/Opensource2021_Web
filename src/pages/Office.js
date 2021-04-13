import React, {useState} from 'react';
import {Jumbotron, ListGroup, ListGroupItem, Button} from 'react-bootstrap'; //제목과 컴퓨터리스트 작성을 위한 import 했음
import Modal from '../components/Modal';

const Office = () => {
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
            <Jumbotron className="background">
                <h1>사무용 컴퓨터</h1>
                <p> 게임도 안하고 영화도 안보는데 문서 작업만 한다면 가벼운 사양의 컴퓨터가 제격!</p>
            </Jumbotron>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <table class="table table-hover">
                        <tr>
                            <td class="pricewidth" rowspan="4">
                                <img
                                    src={process.env.PUBLIC_URL + '/test_image.png'}
                                    width='200'
                                    height='200'
                                    alt="test_image"/>
                            </td>
                            <td colspan="3">
                                <h4>상세 사양</h4>
                            </td>
                        </tr>
                        <tr>
                            <td>CPU : i5-5000</td>
                            <td>RAM : 4GB</td>
                            <td>MainBoard : H410M-H</td>
                        </tr>
                        <tr>
                            <td>GPU : gtx1660</td>
                            <td colspan="2">POWER : 300W</td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-7">
                                            <h2>가격 : 350,000</h2>
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

                    {/*  위의 이미지는 public폴더에 있습니다. public에서 이미지를 가져오려면 process.env.PUBLIC_URLL을 사용해야됩니다. */ }
                    {/* 그리고 주석 단축키는 주석처리할 문장 앞 커서에서 ctrl + / 입니다. 이거 편함 by 차재현 21-04-08*/}
                    {/* 우선 각 상품 리스트출력 구조는 얼추 된듯. 각 조건에 맞는 상품들을 어떻게 불러올지가 문제..*/}
                    {/* 그리고 버튼도 만들어 놨는데 저거를 이제 구매,장바구니랑 연결을 해야되는데 DB영역이니 버튼만 만들어 놓음. */}
                    {/* 그리고 장바구니 추가하면 혹시 가능하면 NavBar에 있는 장바구니에 알림 표시기능 있으면 좋을듯 */}

                </ListGroup.Item>
                <ListGroupItem>이미지랑 사양이랑 내용</ListGroupItem>
                <ListGroupItem>이미지랑 사양이랑 내용</ListGroupItem>

            </ListGroup>

        </div>

    );
};

export default Office;