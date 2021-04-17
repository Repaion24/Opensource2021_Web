import React, {useState, useEffect} from 'react';
import fire from './fire'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {
    Jumbotron,
    Button,
    ListGroup,
    ListGroupItem,
    Tab,
    Tabs
} from 'react-bootstrap';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shoplist from './pages/Shoplist'
import Login from './pages/Login'
import Game from './pages/Game'
import Broadcast from './pages/Broadcast'
import Office from './pages/Office'
import More from './pages/More'
import Purchasehistory from './pages/Purchasehistory'
import Modal from './components/Modal'
import Modal1 from './components/Modal1'
import Modal2 from './components/Modal2'

function App() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invaild-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
        setTimeout(function () {
            window.location.href = "/"
        }, 1500);
    };

    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };

    const findpass = () => {
        fire
            .auth()
            .sendPasswordResetEmail(email)
            .then(function () {})
            .catch(function (error) {});
    };

    const handleLogout = () => {
        fire
            .auth()
            .signOut();
        window.location.href = "/";
    };

    const authListener = () => {
        fire
            .auth()
            .onAuthStateChanged((user) => {
                if (user) {
                    clearInputs();
                    setUser(user);
                } else {
                    setUser("");
                }
            });
    };

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    const [modalOpen1, setModalOpen1] = useState(false);
    const openModal1 = () => {
        setModalOpen1(true);
    }
    const closeModal1 = () => {
        setModalOpen1(false);
    }

    const [modalOpen2, setModalOpen2] = useState(false);
    const openModal2 = () => {
        setModalOpen2(true);
    }
    const closeModal2 = () => {
        setModalOpen2(false);
    }

    const [computerproduct] = useState([
        {
            
        }
    ])



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
        },    {
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
        },
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
    
    const [products1] = useState([
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
    
    const PAGE_PRODUCT = 'products';
    const PAGE_CART = 'cart';
    const PAGE_CART1 = 'cart2';
    const [page, setPage] = useState(PAGE_PRODUCT);
    const [cart, setCart] = useState([]);
    const [cart1, setCart1] = useState([]);


    const addToCart = (product) =>{
        if (user){
            openModal2();
            setCart([...cart, product]);
            setTimeout(function () {
                closeModal2();
            }, 2000);
        }
        else {
            openModal1();
            setTimeout(function () {
                closeModal1();
            }, 2000);
        }
    }

    const addToCart1 = (product) =>{    
        setCart1([...cart1, product]);
    }
    
    const RemoveFromCart = (productToremove)=>{
        setCart(cart.filter(product=>product !== productToremove));
    }

    const RemoveFromCart1 = (productToremove)=>{
        setCart1(cart1.filter(product=>product !== productToremove));
    }

    function confirm2(pro) {
        openModal();
        addToCart1(pro);
        setTimeout(function () {
            closeModal();
            RemoveFromCart(pro);
        }, 2000);
    }

    function confirm1(pro) {
        if (user){
            openModal();
            addToCart1(pro);
            setTimeout(function () {
            closeModal();
        }, 2000);
        }
        else{
            openModal1();
            setTimeout(function () {
                closeModal1();
            }, 2000);
        }
    }

    
    
    const renderProducts = () =>(
        <div>
            {products.map((product, idx)=>(

            <div className="product" key={idx}>
                <ListGroup.Item>
                    <table class="table table-hover">
                        <tr>
                            <td class="pricewidth" rowspan="4">
                                <img
                                src={product.image}
                                width='200'
                                height='200'
                                alt="test_image"/>
                            </td>
                            <td colspan="3">
                                <h4>제품명 : {product.name}</h4>
                            </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>상세 사양</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코어 : {product.core}</td>
                                    <td>스레드 : {product.thread}</td>
                                    <td>세대 : {product.g}</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>가격 : {product.cost}</h2>
                                                </div>
                                                <div class="col-2">
                                                    <React.Fragment>
                                                        <button type="button" class="btn btn-outline-primary" onClick={ ()=>confirm1(product) }>구매하기</button>
                                                        <Modal open={modalOpen} close={closeModal} header="구매 페이지"></Modal>
                                                        <Modal1 open={modalOpen1} close={closeModal1} header="로그인이 필요합니다."></Modal1>
                                                        {/* header 부분에 텍스트를 입력한다. */}

                                                        {/* Modal.js <main> { props.children } </main>에 내용이 입력된다.  */}
                                                    </React.Fragment>
                                                </div>
                                                <div class="col-3">
                                                <React.Fragment>
                                                    <button onClick={()=>addToCart(product)} type="button" class="btn btn-outline-warning">장바구니 추가</button>
                                                    <Modal2 open={modalOpen2} close={closeModal2} header="장바구니 추가"></Modal2>
                                                </React.Fragment>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </ListGroup.Item>
            </div>
        ))}
        </div>
    )

    const renderProducts1 = () =>(
        <div>
            {products1.map((products1, idx)=>(

            <div className="product" key={idx}>
                <ListGroup.Item>
                    <table class="table table-hover">
                        <tr>
                            <td class="pricewidth" rowspan="4">
                                <img
                                src={products1.image}
                                width='200'
                                height='200'
                                alt="test_image"/>
                            </td>
                            <td colspan="3">
                                <h4>제품명 : {products1.name}</h4>
                            </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>상세 사양</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코어 : {products1.core}</td>
                                    <td>스레드 : {products1.thread}</td>
                                    <td>세대 : {products1.g}</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>가격 : {products1.cost}</h2>
                                                </div>
                                                <div class="col-2">
                                                    <React.Fragment>
                                                        <button type="button" class="btn btn-outline-primary" onClick={ ()=>confirm1(products1) }>구매하기</button>
                                                        <Modal open={modalOpen} close={closeModal} header="구매 페이지"></Modal>
                                                        <Modal1 open={modalOpen1} close={closeModal1} header="로그인이 필요합니다."></Modal1>
                                                        {/* header 부분에 텍스트를 입력한다. */}

                                                        {/* Modal.js <main> { props.children } </main>에 내용이 입력된다.  */}
                                                    </React.Fragment>
                                                </div>
                                                <div class="col-3">
                                            <button onClick={()=>addToCart(products1)} type="button" class="btn btn-outline-warning">장바구니 추가</button>
                                            <Modal2 open={modalOpen2} close={closeModal2} header="장바구니 추가"></Modal2>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </ListGroup.Item>
            </div>
        ))}
        </div>
    )

    const renderProducts2 = () =>(
        <div>
            {products2.map((products, idx)=>(

            <div className="product" key={idx}>
                <ListGroup.Item>
                    <table class="table table-hover">
                        <tr>
                            <td class="pricewidth" rowspan="4">
                                <img
                                src={products.image}
                                width='200'
                                height='200'
                                alt="test_image"/>
                            </td>
                            <td colspan="3">
                                <h4>제품명 : {products.name}</h4>
                            </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>상세 사양</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코어 : {products.core}</td>
                                    <td>스레드 : {products.thread}</td>
                                    <td>세대 : {products.g}</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>가격 : {products.cost}</h2>
                                                </div>
                                                <div class="col-2">
                                                    <React.Fragment>
                                                        <button type="button" class="btn btn-outline-primary" onClick={ ()=>confirm1(products) }>구매하기</button>
                                                        <Modal open={modalOpen} close={closeModal} header="구매 페이지"></Modal>
                                                        <Modal1 open={modalOpen1} close={closeModal1} header="로그인이 필요합니다."></Modal1>
                                                        
                                                        {/* header 부분에 텍스트를 입력한다. */}

                                                        {/* Modal.js <main> { props.children } </main>에 내용이 입력된다.  */}
                                                    </React.Fragment>
                                                </div>
                                                <div class="col-3">
                                            <button onClick={()=>addToCart(products)} type="button" class="btn btn-outline-warning">장바구니 추가</button>
                                            <Modal2 open={modalOpen2} close={closeModal2} header="장바구니 추가"></Modal2>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </ListGroup.Item>
            </div>
        ))}
        </div>
    )

    const renderProducts3 = () =>(
        <div>
            {products3.map((products, idx)=>(

            <div className="product" key={idx}>
                <ListGroup.Item>
                    <table class="table table-hover">
                        <tr>
                            <td class="pricewidth" rowspan="4">
                                <img
                                src={products.image}
                                width='200'
                                height='200'
                                alt="test_image"/>
                            </td>
                            <td colspan="3">
                                <h4>제품명 : {products.name}</h4>
                            </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>상세 사양</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코어 : {products.core}</td>
                                    <td>스레드 : {products.thread}</td>
                                    <td>세대 : {products.g}</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>가격 : {products.cost}</h2>
                                                </div>
                                                <div class="col-2">
                                                    <React.Fragment>
                                                        <button type="button" class="btn btn-outline-primary" onClick = { ()=>confirm1(products) }>구매하기</button>
                                                        <Modal open={modalOpen} close={closeModal} header="구매 페이지"></Modal>
                                                        <Modal1 open={modalOpen1} close={closeModal1} header="로그인이 필요합니다."></Modal1>
                                                        {/* header 부분에 텍스트를 입력한다. */}
                                                        {/* Modal.js <main> { props.children } </main>에 내용이 입력된다.  */}
                                                    </React.Fragment>
                                                </div>
                                                <div class="col-3">
                                            <button onClick={()=>addToCart(products)} type="button" class="btn btn-outline-warning">장바구니 추가</button>
                                            <Modal2 open={modalOpen2} close={closeModal2} header="장바구니 추가"></Modal2>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </ListGroup.Item>
            </div>
        ))}
        </div>
    )
    
    const renderCart = () =>(
        <div>
        {cart.map((product, idx)=>(
            <div className="cart" key={idx}>
                <ListGroup.Item>
                    <table class="table table-hover">
                        <tr>
                            <td class="pricewidth" rowspan="4">
                                <img
                                src={product.image}
                                width='200'
                                height='200'
                                alt="test_image"/>
                            </td>
                            <td colspan="3">
                                <h4>제품명 : {product.name}</h4>
                            </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>상세 사양</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코어 : {product.core}</td>
                                    <td>스레드 : {product.thread}</td>
                                    <td>세대 : {product.g}</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>가격 : {product.cost}</h2>
                                                </div>
                                                <div class="col-2">
                                                    <React.Fragment>
                                                        <button type="button" class="btn btn-outline-primary" onClick= { () => confirm2(product) }>구매하기</button>
                                                        <Modal open={modalOpen} close={closeModal} header="구매 페이지"></Modal>
                                                        <Modal1 open={modalOpen1} close={closeModal1} header="로그인이 필요합니다."></Modal1>
                                                        {/* header 부분에 텍스트를 입력한다. */}

                                                        {/* Modal.js <main> { props.children } </main>에 내용이 입력된다.  */}
                                                    </React.Fragment>
                                                </div>
                                                <div class="col-3">
                                                    
                                            <button onClick={()=>RemoveFromCart(product)} type="button" class="btn btn-outline-danger">장바구니 제거</button>
                                            <Modal2 open={modalOpen2} close={closeModal2} header="장바구니 추가"></Modal2>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </ListGroup.Item>
        </div>
        ))}
        </div>
    )
    

    const renderCart1 = () =>(
        <div>
        {cart1.map((product, idx)=>(
            <div className="cart" key={idx}>
                <ListGroup.Item>
                    <table class="table table-hover">
                        <tr>
                            <td class="pricewidth" rowspan="4">
                                <img
                                src={product.image}
                                width='200'
                                height='200'
                                alt="test_image"/>
                            </td>
                            <td colspan="3">
                                <h4>제품명 : {product.name}</h4>
                            </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>상세 사양</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>코어 : {product.core}</td>
                                    <td>스레드 : {product.thread}</td>
                                    <td>세대 : {product.g}</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>가격 : {product.cost}</h2>
                                                </div>
                                                <div class="col-2">
                                                </div>
                                                <div class="col-3">
                                            <button onClick={()=>RemoveFromCart1(product)} type="button" class="btn btn-outline-danger">구매 확인</button>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </ListGroup.Item>
        </div>
        ))}
        </div>
    )

    const navigateTo = (nextPage)=>{
        setPage(nextPage);
    };



    useEffect(() => {
        authListener();
    }, [])

    return (
        <Router>
            <div className="App">
                <Navbar user={user} handleLogout={handleLogout}/>
                <div className="container">
                    <Route path="/shoplist">
                        <Shoplist
                        products = {products}
                        products1 = {products1}
                        products2 = {products2}
                        products3 = {products3}
                        PAGE_PRODUCT = {PAGE_PRODUCT}
                        PAGE_CART = {PAGE_CART}
                        page ={page}
                        cart ={cart}
                        addToCart = {addToCart}
                        RemoveFromCart = {RemoveFromCart}
                        renderProducts = {renderProducts}
                        renderCart = {renderCart}
                        renderCart1 = {renderCart1}
                        navigateTo = {navigateTo}
                        modalOpen = {modalOpen}
                        openModal = {openModal}
                        closeModal = {closeModal}
                        renderProducts1 = {renderProducts1}
                        renderProducts2 = {renderProducts2}
                        renderProducts3 = {renderProducts3}
                        />
                    </Route>
                    <Route path="/" exact="exact">
                        <Home 
                        products = {products}
                        products1 = {products1}
                        products2 = {products2}
                        products3 = {products3}
                        PAGE_PRODUCT = {PAGE_PRODUCT}
                        PAGE_CART = {PAGE_CART}
                        PAGE_CART1 = {PAGE_CART1}
                        page ={page}
                        cart ={cart}
                        cart1 = {cart1}
                        addToCart = {addToCart}
                        RemoveFromCart = {RemoveFromCart}
                        renderProducts = {renderProducts}
                        renderCart = {renderCart}
                        renderCart1 = {renderCart1}
                        navigateTo = {navigateTo}
                        modalOpen = {modalOpen}
                        openModal = {openModal}
                        closeModal = {closeModal}
                        renderProducts1 = {renderProducts1}
                        renderProducts2 = {renderProducts2}
                        renderProducts3 = {renderProducts3}
                        user = {user}
                        />
                    </Route>
                    <Route path="/Game">
                        <Game/>
                    </Route>
                    <Route path="/Broadcast">
                        <Broadcast/>
                    </Route>
                    <Route path="/Office">
                        <Office/>
                    </Route>
                    <Route path="/Purchasehistory">
                        <Purchasehistory/>
                    </Route>
                    <Route path="/login">
                        <Login
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            handleLogin={handleLogin}
                            handleSignup={handleSignup}
                            hasAccount={hasAccount}
                            setHasAccount={setHasAccount}
                            emailError={emailError}
                            passwordError={passwordError}
                            findpass={findpass}/>
                    </Route>
                </div>
            </div>
        </Router>
    );
}

export default App;
