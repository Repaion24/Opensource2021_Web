import React, {useState} from 'react';
import {
    Card,
    Jumbotron,
    Button,
    ListGroup,
    ListGroupItem,
    Tab,
    Tabs
} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
import More from './More'
import Modal from '../components/Modal';




const Home = (props) => {

    const {
        products,
        products1,
        products2,
        products3,
        PAGE_PRODUCT,
        PAGE_CART,
        PAGE_CART1,
        page,
        cart,
        cart1,
        addToCart,
        RemoveFromCart,
        renderProducts,
        renderCart,
        renderCart1,
        navigateTo,
        modalOpen,
        openModal,
        closeModal,
        renderProducts1,
        renderProducts2,
        renderProducts3,
        user
    } = props;



    return (
        <div>
            <Jumbotron className="background">
                <h1>Com.Com에서 자신만의 컴퓨터를 찾으세요!</h1>
                <span>
                    컴퓨터 지식을 모르는 사람도 사용하기 쉬운 웹사이트</span>
                <p>
                <Button size = "lg" variant="success" onClick={()=>navigateTo(PAGE_PRODUCT)} block> 제품 보기 </Button>
                </p>
                <p>
                { user && <div><Button size = "lg" variant="warning" onClick={()=>navigateTo(PAGE_CART) } block > 장바구니 </Button></div>}
                </p>
                <p>
                { user && <div><Button size = "lg" variant="info" onClick={()=>navigateTo(PAGE_CART1)} block > 구매내역 </Button></div>}
                </p>
            </Jumbotron>
            {/* 위의 이미지는 public폴더에 있습니다. public에서 이미지를 가져오려면 process.env.PUBLIC_URLL을 사용해야됩니다. */}
            {/* 그리고 주석 단축키는 주석처리할 문장 앞 커서에서 ctrl + / 입니다. 이거 편함 by 차재현 21-04-08*/}
            {/* 우선 각 상품 리스트출력 구조는 얼추 된듯. 각 조건에 맞는 상품들을 어떻게 불러올지가 문제..*/}
            {/* 그리고 버튼도 만들어 놨는데 저거를 이제 구매,장바구니랑 연결을 해야되는데 DB영역이니 버튼만 만들어 놓음. */}
            {/* 그리고 장바구니 추가하면 혹시 가능하면 NavBar에 있는 장바구니에 알림 표시기능 있으면 좋을듯 */}
            

            {page == PAGE_PRODUCT ? (
                <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
                <Tab eventKey="all" title="ALL">
                <Card.Header><h4>모든 물품 목록</h4></Card.Header>
                    {/* 여기는 All Tabs부분 */}
                    <ListGroup variant="flush">
                            <table class="table table-hover">
                                {renderProducts()}      
                            </table>
                    </ListGroup>
                </Tab>
                
                <Tab eventKey="cpu" title="CPU">
                <Card.Header><h4>CPU 목록</h4></Card.Header>
                    {/* 여기는 CUP Tab 부분 */}
                    <ListGroup variant="flush">
                    <table class="table table-hover">
                                {renderProducts1()}      
                            </table>
                    </ListGroup>
                </Tab>
                <Tab eventKey="gpu" title="GPU">
                <Card.Header><h4>GPU 목록</h4></Card.Header>
                    {/* 여기는 GPU Tab 부분 */}

                    <ListGroup variant="flush">
                    <table class="table table-hover">
                        {renderProducts2()}     
                    </table>
                    </ListGroup>
                </Tab>

                <Tab eventKey="ram" title="RAM">
                <Card.Header><h4>RAM 목록</h4></Card.Header>
                    {/* 여기는 RAM Tab 부분 */}
                    <ListGroup variant="flush">
                    <table class="table table-hover">
                        {renderProducts3()}    
                    </table>
                    </ListGroup>
                </Tab>
            </Tabs>
            ) : (
            <table class="table table-hover">
                    {(page == PAGE_CART && user) && <div><Card.Header>장바구니</Card.Header>{renderCart()}</div>}
                    {(page == PAGE_CART1 && user) && <div><Card.Header>구매내역</Card.Header>{renderCart1()}</div>} 
            </table>
            )}


            {/* 43~700번 줄까지 Home페이지 상품 리스트 출력 코드 (21-04-15 차재현) */}
            <script src="/__/firebase/8.4.1/firebase-app.js"></script>

            <script src="/__/firebase/8.4.1/firebase-analytics.js"></script>

            <script src="/__/firebase/init.js"></script>
        </div>

    );
};

export default Home;