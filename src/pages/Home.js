import React, {useState} from 'react';
import {
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
const Home = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    let history = useHistory();

const [products] = useState([
    {
        name : 'Intel CPU i7',
        cost : '400,000',
        core : '8코어',
        thread : '8스레드',
        g : '9세대',
        image : process.env.PUBLIC_URL + '/cpu_test_image.png'
    },
    {
        name : 'Intel CPU i9',
        cost : '400,000',
        core : '8코어',
        thread : '8스레드',
        g : '9세대',
        image : process.env.PUBLIC_URL + '/cpu_test_image.png'
    },
    {
        name : 'Intel CPU i5',
        cost : '400,000',
        core : '8코어',
        thread : '8스레드',
        g : '9세대',
        image : process.env.PUBLIC_URL + '/cpu_test_image.png'
    },
    {
        name : 'Intel CPU Pantium Gold',
        cost : '400,000',
        core : '8코어',
        thread : '8스레드',
        g : '9세대',
        image : process.env.PUBLIC_URL + '/cpu_test_image.png'
    }
])


const [products2] = useState([
    {
        name : 'NVidia GeForce RTX 3080',
        cost : '400,000',
        core : '8코어',
        thread : '8스레드',
        g : '9세대',
        image : process.env.PUBLIC_URL + '/gpu_test_image.png'
    },
    {
        name : 'NVidia GeForce RTX 2080',
        cost : '400,000',
        core : '8코어',
        thread : '8스레드',
        g : '9세대',
        image : process.env.PUBLIC_URL + '/gpu_test_image.png'
    },
    {
        name : 'NVidia GeForce GTX 1660 super',
        cost : '400,000',
        core : '8코어',
        thread : '8스레드',
        g : '9세대',
        image : process.env.PUBLIC_URL + '/gpu_test_image.png'
    },
    {
        name : 'AMD Radeon pro',
        cost : '400,000',
        core : '8코어',
        thread : '8스레드',
        g : '9세대',
        image : process.env.PUBLIC_URL + '/gpu_test_image.png'
    }
])

const [products3] = useState([
    {
        name : 'SAMSUNG 4GB',
        cost : '400,000',
        core : '8코어',
        thread : '8스레드',
        g : '9세대',
        image : process.env.PUBLIC_URL + '/ram_test_image.png'
    },
    {
        name : 'SAMSUNG 8GB',
        cost : '400,000',
        core : '8코어',
        thread : '8스레드',
        g : '9세대',
        image : process.env.PUBLIC_URL + '/ram_test_image.png'
    },
    {
        name : 'SAMSUNG 16GB',
        cost : '400,000',
        core : '8코어',
        thread : '8스레드',
        g : '9세대',
        image : process.env.PUBLIC_URL + '/ram_test_image.png'
    },
    {
        name : 'SAMSUNG 32GB',
        cost : '400,000',
        core : '8코어',
        thread : '8스레드',
        g : '9세대',
        image : process.env.PUBLIC_URL + '/ram_test_image.png'
    }
])

const [cart, setCart] = useState([]);

const addToCart = (product) =>{

    setCart([...cart, product]);
}

    return (
        <div>
            <Jumbotron className="background">
                <h1>Com.Com에서 자신만의 컴퓨터를 찾으세요!</h1>
                <span>
                    컴퓨터 지식을 모르는 사람도 사용하기 쉬운 웹사이트</span>
                <p>
                    <Button
                        onClick={() => {
                            history.push('/More')
                        }}
                        let="primary">더 알아보기</Button>
                </p>
            </Jumbotron>

            {/* 위의 이미지는 public폴더에 있습니다. public에서 이미지를 가져오려면 process.env.PUBLIC_URLL을 사용해야됩니다. */}
            {/* 그리고 주석 단축키는 주석처리할 문장 앞 커서에서 ctrl + / 입니다. 이거 편함 by 차재현 21-04-08*/}
            {/* 우선 각 상품 리스트출력 구조는 얼추 된듯. 각 조건에 맞는 상품들을 어떻게 불러올지가 문제..*/}
            {/* 그리고 버튼도 만들어 놨는데 저거를 이제 구매,장바구니랑 연결을 해야되는데 DB영역이니 버튼만 만들어 놓음. */}
            {/* 그리고 장바구니 추가하면 혹시 가능하면 NavBar에 있는 장바구니에 알림 표시기능 있으면 좋을듯 */}

            <Tabs defaultActiveKey="cpu" id="uncontrolled-tab-example">
                <Tab eventKey="cpu" title="CPU">
                    {/* 여기는 CPU Tab 부분 */}
                    <ListGroup variant="flush">
                        <ListGroup.Item id="cpu1">
                            <table class="table table-hover">
                            <div>
                                {products.map((product, idx)=>(
                                    <div className="product" key={idx}>
                                        <img src={product.image} alt={product.name}/>
                                        <h3>{product.name}</h3>
                                        <h4>{product.cost}</h4>
                                        <h4>{product.core}</h4>
                                        <h4>{product.thread}</h4>
                                        <h4>{product.g}</h4>
                                        <button onClick={()=>addToCart(product)}>장바구니 추가({cart.length})</button>

                                </div>
                                ))}
                                </div>
                            </table>
                            
                        </ListGroup.Item>
                        <ListGroup.Item id="cpu2">
                            <table class="table table-hover">
                                <tr>
                                    <td class="pricewidth" rowspan="4">
                                        <img
                                            src={process.env.PUBLIC_URL + '/cpu_test_image.png'}
                                            width='200'
                                            height='200'
                                            alt="test_image"/>

                                    </td>
                                    <td colspan="3">
                                        <h4>제품명 : Intel CPU i9</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>상세 사양</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코어 : 8코어</td>
                                    <td>스레드 : 8스레드</td>
                                    <td>세대 : 9세대</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>가격 : 400,000</h2>
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
                        <ListGroup.Item id="cpu3">
                            <table class="table table-hover">
                                <tr>
                                    <td class="pricewidth" rowspan="4">
                                        <img
                                            src={process.env.PUBLIC_URL + '/cpu_test_image.png'}
                                            width='200'
                                            height='200'
                                            alt="test_image"/>

                                    </td>
                                    <td colspan="3">
                                        <h4>제품명 : Intel CPU i5</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>상세 사양</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코어 : 8코어</td>
                                    <td>스레드 : 8스레드</td>
                                    <td>세대 : 9세대</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>가격 : 400,000</h2>
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
                        <ListGroup.Item id="cpu4">
                            <table class="table table-hover">
                                <tr>
                                    <td class="pricewidth" rowspan="4">
                                        <img
                                            src={process.env.PUBLIC_URL + '/cpu_test_image.png'}
                                            width='200'
                                            height='200'
                                            alt="test_image"/>

                                    </td>
                                    <td colspan="3">
                                        <h4>제품명 : Intel CPU Pantium Gold</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>상세 사양</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코어 : 8코어</td>
                                    <td>스레드 : 8스레드</td>
                                    <td>세대 : 9세대</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>가격 : 400,000</h2>
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
                    </ListGroup>
                </Tab>

                <Tab eventKey="gpu" title="GPU">
                    {/* 여기는 GPU Tab 부분 */}

                    <ListGroup variant="flush">
                        <ListGroup.Item id="gpu1">
                            <table class="table table-hover">
                                <tr>
                                <div>
                                {products2.map((product2, idx)=>(
                                    <div className="product2" key={idx}>
                                        <img src={product2.image} alt={product2.name}/>
                                        <h3>{product2.name}</h3>
                                        <h4>{product2.cost}</h4>
                                        <h4>{product2.core}</h4>
                                        <h4>{product2.thread}</h4>
                                        <h4>{product2.g}</h4>
                                        <button onClick={()=>addToCart(product2)}>장바구니 추가({cart.length})</button>

                                </div>
                                ))}
                                </div>
                                </tr>
                            </table>

                            {/* 위의 이미지는 public폴더에 있습니다. public에서 이미지를 가져오려면 process.env.PUBLIC_URLL을 사용해야됩니다. */}
                            {/* 그리고 주석 단축키는 주석처리할 문장 앞 커서에서 ctrl + / 입니다. 이거 편함 by 차재현 21-04-08*/}
                            {/* 우선 각 상품 리스트출력 구조는 얼추 된듯. 각 조건에 맞는 상품들을 어떻게 불러올지가 문제..*/}
                            {/* 그리고 버튼도 만들어 놨는데 저거를 이제 구매,장바구니랑 연결을 해야되는데 DB영역이니 버튼만 만들어 놓음. */}
                            {/* 그리고 장바구니 추가하면 혹시 가능하면 NavBar에 있는 장바구니에 알림 표시기능 있으면 좋을듯 */}

                        </ListGroup.Item>
                        <ListGroup.Item id="gpu2">
                            <table class="table table-hover">
                                <tr>
                                    <td class="pricewidth" rowspan="4">
                                        <img
                                            src={process.env.PUBLIC_URL + '/gpu_test_image.png'}
                                            width='200'
                                            height='200'
                                            alt="test_image"/>

                                    </td>
                                    <td colspan="3">
                                        <h4>제품명 : NVidia GeForce RTX 2080
                                        </h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>상세 사양</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코어 : 8코어</td>
                                    <td>스레드 : 8스레드</td>
                                    <td>세대 : 9세대</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>가격 : 400,000</h2>
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
                        <ListGroup.Item id="gpu3">
                            <table class="table table-hover">
                                <tr>
                                    <td class="pricewidth" rowspan="4">
                                        <img
                                            src={process.env.PUBLIC_URL + '/gpu_test_image.png'}
                                            width='200'
                                            height='200'
                                            alt="test_image"/>

                                    </td>
                                    <td colspan="3">
                                        <h4>제품명 : NVidia GeForce GTX 1660 super</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>상세 사양</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코어 : 8코어</td>
                                    <td>스레드 : 8스레드</td>
                                    <td>세대 : 9세대</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>가격 : 400,000</h2>
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
                        <ListGroup.Item id="gpu4">
                            <table class="table table-hover">
                                <tr>
                                    <td class="pricewidth" rowspan="4">
                                        <img
                                            src={process.env.PUBLIC_URL + '/gpu_test_image.png'}
                                            width='200'
                                            height='200'
                                            alt="test_image"/>

                                    </td>
                                    <td colspan="3">
                                        <h4>제품명 : AMD Radeon pro</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>상세 사양</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코어 : 8코어</td>
                                    <td>스레드 : 8스레드</td>
                                    <td>세대 : 9세대</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>가격 : 400,000</h2>
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
                    </ListGroup>
                </Tab>

                <Tab eventKey="ram" title="RAM">
                    {/* 여기는 RAM Tab 부분 */}
                    <ListGroup variant="flush">
                        <ListGroup.Item id="ram1">
                            <table class="table table-hover">
                                <tr>
                                <div>
                                {products3.map((product3, idx)=>(
                                    <div className="product3" key={idx}>
                                        <img src={product3.image} alt={product3.name}/>
                                        <h3>{product3.name}</h3>
                                        <h4>{product3.cost}</h4>
                                        <h4>{product3.core}</h4>
                                        <h4>{product3.thread}</h4>
                                        <h4>{product3.g}</h4>
                                        <button onClick={()=>addToCart(product3)}>장바구니 추가({cart.length})</button>

                                </div>
                                ))}
                                </div>
                                </tr>
                            </table>

                            {/* 위의 이미지는 public폴더에 있습니다. public에서 이미지를 가져오려면 process.env.PUBLIC_URLL을 사용해야됩니다. */}
                            {/* 그리고 주석 단축키는 주석처리할 문장 앞 커서에서 ctrl + / 입니다. 이거 편함 by 차재현 21-04-08*/}
                            {/* 우선 각 상품 리스트출력 구조는 얼추 된듯. 각 조건에 맞는 상품들을 어떻게 불러올지가 문제..*/}
                            {/* 그리고 버튼도 만들어 놨는데 저거를 이제 구매,장바구니랑 연결을 해야되는데 DB영역이니 버튼만 만들어 놓음. */}
                            {/* 그리고 장바구니 추가하면 혹시 가능하면 NavBar에 있는 장바구니에 알림 표시기능 있으면 좋을듯 */}

                        </ListGroup.Item>
                        <ListGroup.Item id="ram2">
                            <table class="table table-hover">
                                <tr>
                                    <td class="pricewidth" rowspan="4">
                                        <img
                                            src={process.env.PUBLIC_URL + '/ram_test_image.png'}
                                            width='200'
                                            height='200'
                                            alt="test_image"/>

                                    </td>
                                    <td colspan="3">
                                        <h4>제품명 : SAMSUNG 8GB</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>상세 사양</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코어 : 8코어</td>
                                    <td>스레드 : 8스레드</td>
                                    <td>세대 : 9세대</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>가격 : 400,000</h2>
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
                        <ListGroup.Item id="ram3">
                            <table class="table table-hover">
                                <tr>
                                    <td class="pricewidth" rowspan="4">
                                        <img
                                            src={process.env.PUBLIC_URL + '/ram_test_image.png'}
                                            width='200'
                                            height='200'
                                            alt="test_image"/>

                                    </td>
                                    <td colspan="3">
                                        <h4>제품명 : SAMSUNG 16GB</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>상세 사양</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코어 : 8코어</td>
                                    <td>스레드 : 8스레드</td>
                                    <td>세대 : 9세대</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>가격 : 400,000</h2>
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
                        <ListGroup.Item id="ram4">
                            <table class="table table-hover">
                                <tr>
                                    <td class="pricewidth" rowspan="4">
                                        <img
                                            src={process.env.PUBLIC_URL + '/ram_test_image.png'}
                                            width='200'
                                            height='200'
                                            alt="test_image"/>

                                    </td>
                                    <td colspan="3">
                                        <h4>제품명 : SAMSUNG 32GB</h4>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>상세 사양</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코어 : 8코어</td>
                                    <td>스레드 : 8스레드</td>
                                    <td>세대 : 9세대</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>가격 : 400,000</h2>
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
                    </ListGroup>
                </Tab>
            </Tabs>
            {/* 43~700번 줄까지 Home페이지 상품 리스트 출력 코드 (21-04-15 차재현) */}
            <script src="/__/firebase/8.4.1/firebase-app.js"></script>

            <script src="/__/firebase/8.4.1/firebase-analytics.js"></script>

            <script src="/__/firebase/init.js"></script>
        </div>

    );
};

export default Home;