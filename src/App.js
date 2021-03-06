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

    const [products] = useState([
        {
            name : 'Intel CPU i7',
            cost : '300,000',
            core : '8??????',
            thread : '16?????????',
            g : '10??????',
            image : process.env.PUBLIC_URL + '/Intel CPU i7.jpg',
            maker : 'Intel'
        },
        {
            name : 'Intel CPU i9',
            cost : '400,000',
            core : '10??????',
            thread : '20?????????',
            g : '10??????',
            image : process.env.PUBLIC_URL + '/Intel CPU i9.jpg',
            maker : 'Intel'
            
        },
        {
            name : 'Intel CPU i5',
            cost : '200,000',
            core : '6??????',
            thread : '12?????????',
            g : '10??????',
            image : process.env.PUBLIC_URL + '/Intel CPU i5.jpg',
            maker : 'Intel'
        },
        {
            name : 'Intel CPU Pantium Gold',
            cost : '200,000',
            core : '6??????',
            thread : '12?????????',
            g : '11??????',
            image : process.env.PUBLIC_URL + '/Intel CPU Pantium Gold.jpg',
            maker : 'Intel'
        },
        {
            name : 'Intel ????????? ??????',
            cost : '200,000',
            core : '6??????',
            thread : '12?????????',
            g : '11??????',
            image : process.env.PUBLIC_URL + '/Intel pentium gold.jpg',
            maker : 'Intel'
            
        },
        {
            name : 'Intel ?????????',
            cost : '60,000',
            core : '2??????',
            thread : '2?????????',
            g : '10??????',
            image : process.env.PUBLIC_URL + '/Intel celleron.jpg',
            maker : 'Intel'
        },
        {
            name : 'AMD Ryzen9 ',
            cost : '800,000',
            core : '12??????',
            thread : '24?????????',
            g : '4??????',
            image : process.env.PUBLIC_URL + '/AMD Ryzen9.jpg',
            maker : 'AMD'
            
        },
        {
            name : 'AMD Ryzen7',
            cost : '500,000',
            core : '8??????',
            thread : '16?????????',
            g : '4??????',
            image : process.env.PUBLIC_URL + '/AMD Ryzen7.jpg',
            maker : 'AMD'
            
        },
        {
            name : 'AMD Ryzen5',
            cost : '300,000',
            core : '6??????',
            thread : '12?????????',
            g : '4??????',
            image : process.env.PUBLIC_URL + '/AMD Ryzen5.jpg',
            maker : 'AMD'
            
        },
        {
            name : 'AMD Ryzen3',
            cost : '200,000',
            core : '6??????',
            thread : '12?????????',
            g : '3??????',
            image : process.env.PUBLIC_URL + '/AMD Ryzen3.jpg',
            maker : 'AMD'
            
        },
        {
            name : 'SAMSUNG 4GB',
            cost : '30,000',
            image : process.env.PUBLIC_URL + '/SAMSUNG 4GB.jpg',
            core : 'samsung'
        },
        {
            name : 'SAMSUNG 8GB',
            cost : '40,000',
            image : process.env.PUBLIC_URL + '/SAMSUNG 8GB.jpg',
            core : 'samsung'
        },
        {
            name : 'SAMSUNG 16GB',
            cost : '90,000',
            image : process.env.PUBLIC_URL + '/SAMSUNG 16GB.jpg',
            core : 'samsung'
        },
        {
            name : 'SAMSUNG 32GB',
            cost : '180,000',
            image : process.env.PUBLIC_URL + '/SAMSUNG 32GB.jpg',
            core : 'samsung'
        },
        {
            name : 'SAMSUNG 64GB (DDR4)',
            cost : '400,000',
            image : process.env.PUBLIC_URL + '/SAMSUNG 64GB (DDR4).jpg',
            core : 'samsung'
        },
        {
            name : 'G.SKILL AEGIS 8GB (DDR4)',
            cost : '50,000',
            image : process.env.PUBLIC_URL + '/G.SKILL AEGIS 8GB (DDR4).jpg',
            core : 'G.SKILL'
        },
        {
            name : 'G.SKILL RIPJAWS V VB 8GB',
            cost : '60,000',
            image : process.env.PUBLIC_URL + '/G.SKILL RIPJAWS V VB 8GB.jpg',
            core : 'G.SKILL'
        },
        {
            name : 'G.SKILL TRIDENT Z 16GB',
            cost : '200,000',
            image : process.env.PUBLIC_URL + '/G.SKILL TRIDENT Z 16GB.jpg',
            core : 'G.SKILL'
        },
        {
            name : 'TeamGroup T-Force 32GB',
            cost : '300,000',
            image : process.env.PUBLIC_URL + '/SAMSUNG 8GB.jpg',
            core : 'TeamGroup'
        },
        {
            name : 'TeamGroup T-CREAT 64GB',
            cost : '600,000',
            image : process.env.PUBLIC_URL + '/TeamGroup T-CREAT 64GB.jpg',
            core : 'TeamGroup'
        },
        {
            name : 'AMD ????????? RX 560',
            cost : '300,000',
            core : '????????? : 2GB',
            image : process.env.PUBLIC_URL + 'AMD ????????? RX 560.jpg',
            thread : 'AMD'
        },
        {
            name : 'NVidia GeForce RTX 2080',
            cost : '1,300,000',
            core : '????????? : 8GB',
            image : process.env.PUBLIC_URL + '/NVidia GeForce RTX 2080.jpg',
            thread : 'NVdia'
        },
        {
            name : 'NVidia GeForce GTX 1660 super',
            cost : '700,000',
            core : '????????? : 6GB',
            image : process.env.PUBLIC_URL + '/NVidia GeForce GTX 1660 super.jpg',
            thread : 'NVdia'
        },
        {
            name : 'AMD Radeon pro',
            cost : '2,500,000',
            core : '????????? : 16GB',
            image : process.env.PUBLIC_URL + '/AMD Radeon pro.jpg',
            thread : 'AMD'
        },
        {
            name : 'RTX 3060 ti',
            cost : '1,800,000',
            core : '????????? : 16GB',
            image : process.env.PUBLIC_URL + '/RTX 3060 ti.jpg',
            thread : '?????????'
        },
        {
            name : 'RTX 2060',
            cost : '600,000',
            core : '????????? : 6GB',
            image : process.env.PUBLIC_URL + 'RTX 2060.jpg',
            thread : '?????????'
        },
        {
            name : 'Nvidia Titan V',
            cost : '5,000,000',
            core : '????????? : 12GB',
            image : process.env.PUBLIC_URL + '/Nvidia Titan V.jpg',
            thread : 'NVida'
        },
        {
            name : 'AMD ????????? RX 6900 XT',
            cost : '2,100,000',
            core : '????????? : 16GB',
            image : process.env.PUBLIC_URL + '/AMD ????????? RX 6900 XT.jpg',
            thread : 'AMD'
        },
        {
            name : 'AMD ????????? RX Vega 64',
            cost : '1,00,000',
            core : '????????? :8GB',
            image : process.env.PUBLIC_URL + '/AMD ????????? RX Vega 64.jpg',
            thread : 'AMD'
        },
        {
            name : 'ASRock B560M PRO4 ?????????',
            cost : '130,000',
            core : '????????? :128GB',
            thread : '?????? ?????? : 4???',
            maker : 'Intel',
            image : process.env.PUBLIC_URL + '/ASRock B560M PRO4 ?????????.jpg',
            
        },
        {
            name : 'ASRock B560M PRO4 ?????????',
            cost : '130,000',
            core : '????????? :128GB',
            thread : '?????? ?????? : 4???',
            maker : 'Intel',
            image : process.env.PUBLIC_URL + '/ASRock B560M PRO4 ?????????.jpg',
            
        },
        {
            name : 'MSI MAG B450M ????????? ??????',
            cost : '90,000',
            core : '????????? :128GB',
            thread : '?????? ?????? : 4???',
            maker : 'AMD',
            image : process.env.PUBLIC_URL + '/MSI MAG B450M ????????? ??????.jpg',
            
        },
        {
            name : '?????????????????? Classic II 600W 80PLUS 230V EU',
            cost : '60,000',
            core : '?????? : 600W',
            thread : '??????????????????',
            image : process.env.PUBLIC_URL + '/?????????????????? Classic II 600W 80PLUS 230V EU.jpg',
        },
        {
            name : 'ABKO SUITMASTER SETTLER 600W 80PLUS Standard 230V EU',
            cost : '50,000',
            core : '?????? : 600W',
            thread : 'ABKO',
            image : process.env.PUBLIC_URL + '/ABKO SUITMASTER SETTLER 600W 80PLUS Standard 230V EU.jpg',
        },
        {
            name : 'FSP HYDRO G PRO 1000W 80PLUS Gold Full Modular',
            cost : '150,000',
            core : '?????? : 1000W',
            thread : 'FSP',
            image : process.env.PUBLIC_URL + '/	FSP HYDRO G PRO 1000W 80PLUS Gold Full Modular.jpg',
        }
    ])
    
    const [products1] = useState([
        {
            name : 'Intel CPU i7',
            cost : '300,000',
            core : '8??????',
            thread : '16?????????',
            g : '10??????',
            image : process.env.PUBLIC_URL + '/Intel CPU i7.jpg',
            maker : 'Intel'
        },
        {
            name : 'Intel CPU i9',
            cost : '400,000',
            core : '10??????',
            thread : '20?????????',
            g : '10??????',
            image : process.env.PUBLIC_URL + '/Intel CPU i9.jpg',
            maker : 'Intel'
            
        },
        {
            name : 'Intel CPU i5',
            cost : '200,000',
            core : '6??????',
            thread : '12?????????',
            g : '10??????',
            image : process.env.PUBLIC_URL + '/Intel CPU i5.jpg',
            maker : 'Intel'
        },
        {
            name : 'Intel CPU Pantium Gold',
            cost : '200,000',
            core : '6??????',
            thread : '12?????????',
            g : '11??????',
            image : process.env.PUBLIC_URL + '/Intel CPU Pantium Gold.jpg',
            maker : 'Intel'
        },
        {
            name : 'Intel ????????? ??????',
            cost : '200,000',
            core : '6??????',
            thread : '12?????????',
            g : '11??????',
            image : process.env.PUBLIC_URL + '/Intel pentium gold.jpg',
            maker : 'Intel'
            
        },
        {
            name : 'Intel ?????????',
            cost : '60,000',
            core : '2??????',
            thread : '2?????????',
            g : '10??????',
            image : process.env.PUBLIC_URL + '/Intel celleron.jpg',
            maker : 'Intel'
            
        },
        {
            name : 'AMD Ryzen9 ',
            cost : '800,000',
            core : '12??????',
            thread : '24?????????',
            g : '4??????',
            image : process.env.PUBLIC_URL + '/AMD Ryzen9.jpg',
            maker : 'AMD'
            
        },
        {
            name : 'AMD Ryzen7',
            cost : '500,000',
            core : '8??????',
            thread : '16?????????',
            g : '4??????',
            image : process.env.PUBLIC_URL + '/AMD Ryzen7.jpg',
            maker : 'AMD'
            
        },
        {
            name : 'AMD Ryzen5',
            cost : '300,000',
            core : '6??????',
            thread : '12?????????',
            g : '4??????',
            image : process.env.PUBLIC_URL + '/AMD Ryzen5.jpg',
            maker : 'AMD'
            
        },
        {
            name : 'AMD Ryzen3',
            cost : '200,000',
            core : '6??????',
            thread : '12?????????',
            g : '3??????',
            image : process.env.PUBLIC_URL + '/AMD Ryzen3.jpg',
            maker : 'AMD'
            
        }
    ])
    
    const [products2] = useState([
        {
            name : 'SAMSUNG 4GB',
            cost : '30,000',
            image : process.env.PUBLIC_URL + '/SAMSUNG 4GB.jpg',
            core : 'samsung'
        },
        {
            name : 'SAMSUNG 8GB',
            cost : '40,000',
            image : process.env.PUBLIC_URL + '/SAMSUNG 8GB.jpg',
            core : 'samsung'
        },
        {
            name : 'SAMSUNG 16GB',
            cost : '90,000',
            image : process.env.PUBLIC_URL + '/SAMSUNG 16GB.jpg',
            core : 'samsung'
        },
        {
            name : 'SAMSUNG 32GB',
            cost : '180,000',
            image : process.env.PUBLIC_URL + '/SAMSUNG 32GB.jpg',
            core : 'samsung'
        },
        {
            name : 'SAMSUNG 64GB (DDR4)',
            cost : '400,000',
            image : process.env.PUBLIC_URL + '/SAMSUNG 64GB (DDR4).jpg',
            core : 'samsung'
        },
        {
            name : 'G.SKILL AEGIS 8GB (DDR4)',
            cost : '50,000',
            image : process.env.PUBLIC_URL + '/G.SKILL AEGIS 8GB (DDR4).jpg',
            core : 'G.SKILL'
        },
        {
            name : 'G.SKILL RIPJAWS V VB 8GB',
            cost : '60,000',
            image : process.env.PUBLIC_URL + '/G.SKILL RIPJAWS V VB 8GB.jpg',
            core : 'G.SKILL'
        },
        {
            name : 'G.SKILL TRIDENT Z 16GB',
            cost : '200,000',
            image : process.env.PUBLIC_URL + '/G.SKILL TRIDENT Z 16GB.jpg',
            core : 'G.SKILL'
        },
        {
            name : 'TeamGroup T-Force 32GB',
            cost : '300,000',
            image : process.env.PUBLIC_URL + '/SAMSUNG 8GB.jpg',
            core : 'TeamGroup'
        },
        {
            name : 'TeamGroup T-CREAT 64GB',
            cost : '600,000',
            image : process.env.PUBLIC_URL + '/TeamGroup T-CREAT 64GB.jpg',
            core : 'TeamGroup'
        }
    ])
    
    const [products3] = useState([
        {
            name : 'AMD ????????? RX 560',
            cost : '300,000',
            core : '????????? : 2GB',
            image : process.env.PUBLIC_URL + 'AMD ????????? RX 560.jpg',
            thread : 'AMD'
        },
        {
            name : 'NVidia GeForce RTX 2080',
            cost : '1,300,000',
            core : '????????? : 8GB',
            image : process.env.PUBLIC_URL + '/NVidia GeForce RTX 2080.jpg',
            thread : 'NVdia'
        },
        {
            name : 'NVidia GeForce GTX 1660 super',
            cost : '700,000',
            core : '????????? : 6GB',
            image : process.env.PUBLIC_URL + '/NVidia GeForce GTX 1660 super.jpg',
            thread : 'NVdia'
        },
        {
            name : 'AMD Radeon pro',
            cost : '2,500,000',
            core : '????????? : 16GB',
            image : process.env.PUBLIC_URL + '/AMD Radeon pro.jpg',
            thread : 'AMD'
        },
        {
            name : 'RTX 3060 ti',
            cost : '1,800,000',
            core : '????????? : 16GB',
            image : process.env.PUBLIC_URL + '/RTX 3060 ti.jpg',
            thread : '?????????'
        },
        {
            name : 'RTX 2060',
            cost : '600,000',
            core : '????????? : 6GB',
            image : process.env.PUBLIC_URL + 'RTX 2060.jpg',
            thread : '?????????'
        },
        {
            name : 'Nvidia Titan V',
            cost : '5,000,000',
            core : '????????? : 12GB',
            image : process.env.PUBLIC_URL + '/Nvidia Titan V.jpg',
            thread : 'NVida'
        },
        {
            name : 'AMD ????????? RX 6900 XT',
            cost : '2,100,000',
            core : '????????? : 16GB',
            image : process.env.PUBLIC_URL + '/AMD ????????? RX 6900 XT.jpg',
            thread : 'AMD'
        },
        {
            name : 'AMD ????????? RX Vega 64',
            cost : '1,00,000',
            core : '????????? :8GB',
            image : process.env.PUBLIC_URL + '/AMD ????????? RX Vega 64.jpg',
            thread : 'AMD'
        }
    ])

    const [products4] = useState([
        {
            name : 'ASRock B560M PRO4 ?????????',
            cost : '130,000',
            core : '????????? :128GB',
            thread : '?????? ?????? : 4???',
            maker : 'Intel',
            image : process.env.PUBLIC_URL + '/ASRock B560M PRO4 ?????????.jpg',
            
        },
        {
            name : 'MSI MAG B450M ????????? ??????',
            cost : '90,000',
            core : '????????? :128GB',
            thread : '?????? ?????? : 4???',
            maker : 'AMD',
            image : process.env.PUBLIC_URL + '/MSI MAG B450M ????????? ??????.jpg',
            
        },
        {
            name : 'ASRock Z590 ???????????????',
            cost : '260,000',
            core : '????????? :128GB',
            thread : '?????? ?????? : 5???',
            maker : 'Intel',
            image : process.env.PUBLIC_URL + '/ASRock Z590 ???????????????.jpg',
            
        },
        {
            name : 'ASRock Z590 EXTREME',
            cost : '280,000',
            core : '????????? :128GB',
            thread : '?????? ?????? : 5???',
            maker : 'Intel',
            image : process.env.PUBLIC_URL + '/ASRock Z590 EXTREME.jpg',
            
        }, {
            name : 'ASRock H470M-ITX/ac',
            cost : '180,000',
            core : '????????? :64GB',
            thread : '?????? ?????? : 1???',
            maker : 'Intel',
            image : process.env.PUBLIC_URL + '/ASRock H470M-ITX.jpg',
            
        }, {
            name : 'ASRock H510M-HDV',
            cost : '90,000',
            core : '????????? :64GB',
            thread : '?????? ?????? : 2???',
            maker : 'Intel',
            image : process.env.PUBLIC_URL + '/ASRock H510M-HDV.jpg',
            
        },  {
            name : 'ASUS ROG CROSSHAIR VIII DARK HERO',
            cost : '530,000',
            core : '????????? :128GB',
            thread : '?????? ?????? : 4???',
            maker : 'AMD',
            image : process.env.PUBLIC_URL + '/ASUS ROG CROSSHAIR VIII DARK HERO.jpg',
            
        }, {
            name : 'ASRock A320M-HDV R4.0 ',
            cost : '66,000',
            core : '????????? :32GB',
            thread : '?????? ?????? : 2???',
            maker : 'AMD',
            image : process.env.PUBLIC_URL + '/ASRock A320M-HDV R4.0.jpg',
            
        }, {
            name : 'ASUS TUF Gaming B550-PLUS',
            cost : '170,000',
            core : '????????? :128GB',
            thread : '?????? ?????? : 5???',
            maker : 'AMD',
            image : process.env.PUBLIC_URL + '/ASUS TUF Gaming B550-PLUS.jpg',
            
        }, {
            name : 'MSI A520M-A PRO',
            cost : '70,000',
            core : '????????? :64GB',
            thread : '?????? ?????? : 2???',
            maker : 'AMD',
            image : process.env.PUBLIC_URL + '/MSI A520M-A PRO.jpg',
            
        }
    ])

    const [products5] = useState([
        {
            name : '?????????????????? Classic II 600W 80PLUS 230V EU',
            cost : '60,000',
            core : '?????? : 600W',
            thread : '??????????????????',
            image : process.env.PUBLIC_URL + '/?????????????????? Classic II 600W 80PLUS 230V EU.jpg',
        },
        {
            name : 'ABKO SUITMASTER SETTLER 600W 80PLUS Standard 230V EU',
            cost : '50,000',
            core : '?????? : 600W',
            thread : 'ABKO',
            image : process.env.PUBLIC_URL + '/ABKO SUITMASTER SETTLER 600W 80PLUS Standard 230V EU.jpg',
        },
        {
            name : 'FSP HYDRO G PRO 1000W 80PLUS Gold Full Modular',
            cost : '150,000',
            core : '?????? : 1000W',
            thread : 'FSP',
            image : process.env.PUBLIC_URL + '/	FSP HYDRO G PRO 1000W 80PLUS Gold Full Modular.jpg',
        },{
            name : '?????????????????? CASLON M 700W 80PLUS 230V EU',
            cost : '79,000',
            core : '?????? : 7000W',
            thread : '??????????????????',
            image : process.env.PUBLIC_URL + '/	?????????????????? CASLON M 700W 80PLUS 230V EU.jpg',
        },{
            name : 'EVGA 750 GQ 80PLUS GOLD',
            cost : '110,000',
            core : '?????? : 7500W',
            thread : 'EVGA',
            image : process.env.PUBLIC_URL + '/	EVGA 750 GQ 80PLUS GOLD.jpg',
        },{
            name : 'Antec EAG PRO 750W 80PLUS GOLD',
            cost : '110,000',
            core : '?????? : 750W',
            thread : 'Antec',
            image : process.env.PUBLIC_URL + '/	Antec EAG PRO 750W 80PLUS GOLD.jpg',
        },{
            name : '??????????????? MWE 600 BRONZE V2 230V',
            cost : '56,000',
            core : '?????? : 600W',
            thread : '???????????????',
            image : process.env.PUBLIC_URL + '/	??????????????? MWE 600 BRONZE V2 230V.jpg',
        },{
            name : '???????????? REVOLUTION D.F. ERF750EWT 80Plus Gold Full Modular',
            cost : '130,000',
            core : '?????? : 750W',
            thread : '????????????',
            image : process.env.PUBLIC_URL + '/	???????????? REVOLUTION D.F. ERF750EWT 80Plus Gold Full Modular.jpg',
        },{
            name : '????????? FOCUS GOLD GM-850 Modular',
            cost : '140,000',
            core : '?????? : 850W',
            thread : '?????????',
            image : process.env.PUBLIC_URL + '/	????????? FOCUS GOLD GM-850 Modular.jpg',
        },{
            name : '????????? PRIME GOLD GX-1300 Full Modular',
            cost : '340,000',
            core : '?????? : 1300W',
            thread : '?????????',
            image : process.env.PUBLIC_URL + '/	????????? PRIME GOLD GX-1300 Full Modular.jpg',
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

    var checking = true;
    var before = "";

    const changecheck = () =>{
        checking = false;
    }


    const check = () => {
        if(cart.length == 0){
            return true;
        }
        {checking = true}
        {before = cart[0].maker}
        {cart.map((product, idx)=>(
            <div className="product" key={idx}>
                {product.maker ? (
                    (before != product.maker) && changecheck
                    (before = product.maker)
                ) : (
                    console.log()
                )}
        </div>
        ))}

        if(checking){
            return true;
        }
        else{
            return false;
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
                                <h4>????????? : {product.name}</h4>
                            </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>?????? ??????</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td> {product.core}</td>
                                    <td> {product.thread}</td>
                                    <td> {product.g}</td>
                                    <td> {product.maker}</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>?????? : {product.cost}</h2>
                                                </div>
                                                <div class="col-2">
                                                    <React.Fragment>
                                                        <button type="button" class="btn btn-outline-primary" onClick={ ()=>confirm1(product) }>??????</button>
                                                        <Modal open={modalOpen} close={closeModal} header="?????? ?????????"></Modal>
                                                        <Modal1 open={modalOpen1} close={closeModal1} header="???????????? ???????????????."></Modal1>
                                                        {/* header ????????? ???????????? ????????????. */}

                                                        {/* Modal.js <main> { props.children } </main>??? ????????? ????????????.  */}
                                                    </React.Fragment>
                                                </div>
                                                <div class="col-3">
                                                <React.Fragment>
                                                    <button onClick={()=>addToCart(product)} type="button" class="btn btn-outline-warning">????????????</button>
                                                    <Modal2 open={modalOpen2} close={closeModal2} header="???????????? ??????"></Modal2>
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
                                <h4>????????? : {products1.name}</h4>
                            </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>?????? ??????</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td> {products1.core}</td>
                                    <td> {products1.thread}</td>
                                    <td> {products1.g}</td>
                                    <td> {products1.maker}</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>?????? : {products1.cost}</h2>
                                                </div>
                                                <div class="col-2">
                                                    <React.Fragment>
                                                        <button type="button" class="btn btn-outline-primary" onClick={ ()=>confirm1(products1) }>??????</button>
                                                        <Modal open={modalOpen} close={closeModal} header="?????? ?????????"></Modal>
                                                        <Modal1 open={modalOpen1} close={closeModal1} header="???????????? ???????????????."></Modal1>
                                                        {/* header ????????? ???????????? ????????????. */}

                                                        {/* Modal.js <main> { props.children } </main>??? ????????? ????????????.  */}
                                                    </React.Fragment>
                                                </div>
                                                <div class="col-3">
                                            <button onClick={()=>addToCart(products1)} type="button" class="btn btn-outline-warning">???????????? ??????</button>
                                            <Modal2 open={modalOpen2} close={closeModal2} header="???????????? ??????"></Modal2>
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
                                <h4>????????? : {products.name}</h4>
                            </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>?????? ??????</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td> {products.core}</td>
                                    <td> {products.thread}</td>
                                    <td> {products.g}</td>
                                    <td> {products.maker}</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>?????? : {products.cost}</h2>
                                                </div>
                                                <div class="col-2">
                                                    <React.Fragment>
                                                        <button type="button" class="btn btn-outline-primary" onClick={ ()=>confirm1(products) }>??????</button>
                                                        <Modal open={modalOpen} close={closeModal} header="?????? ?????????"></Modal>
                                                        <Modal1 open={modalOpen1} close={closeModal1} header="???????????? ???????????????."></Modal1>
                                                        
                                                        {/* header ????????? ???????????? ????????????. */}

                                                        {/* Modal.js <main> { props.children } </main>??? ????????? ????????????.  */}
                                                    </React.Fragment>
                                                </div>
                                                <div class="col-3">
                                            <button onClick={()=>addToCart(products)} type="button" class="btn btn-outline-warning">???????????? ??????</button>
                                            <Modal2 open={modalOpen2} close={closeModal2} header="???????????? ??????"></Modal2>
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
                                <h4>????????? : {products.name}</h4>
                            </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>?????? ??????</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td> {products.core}</td>
                                    <td> {products.thread}</td>
                                    <td> {products.g}</td>
                                    <td> {products.maker}</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>?????? : {products.cost}</h2>
                                                </div>
                                                <div class="col-2">
                                                    <React.Fragment>
                                                        <button type="button" class="btn btn-outline-primary" onClick = { ()=>confirm1(products) }>??????</button>
                                                        <Modal open={modalOpen} close={closeModal} header="?????? ?????????"></Modal>
                                                        <Modal1 open={modalOpen1} close={closeModal1} header="???????????? ???????????????."></Modal1>
                                                        {/* header ????????? ???????????? ????????????. */}
                                                        {/* Modal.js <main> { props.children } </main>??? ????????? ????????????.  */}
                                                    </React.Fragment>
                                                </div>
                                                <div class="col-3">
                                            <button onClick={()=>addToCart(products)} type="button" class="btn btn-outline-warning">???????????? ??????</button>
                                            <Modal2 open={modalOpen2} close={closeModal2} header="???????????? ??????"></Modal2>
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
    const renderProducts4 = () =>(
        <div>
            {products4.map((products, idx)=>(

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
                                <h4>????????? : {products.name}</h4>
                            </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>?????? ??????</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td> {products.core}</td>
                                    <td> {products.thread}</td>
                                    <td> {products.g}</td>
                                    <td> {products.maker}</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>?????? : {products.cost}</h2>
                                                </div>
                                                <div class="col-2">
                                                    <React.Fragment>
                                                        <button type="button" class="btn btn-outline-primary" onClick={ ()=>confirm1(products) }>??????</button>
                                                        <Modal open={modalOpen} close={closeModal} header="?????? ?????????"></Modal>
                                                        <Modal1 open={modalOpen1} close={closeModal1} header="???????????? ???????????????."></Modal1>
                                                        
                                                        {/* header ????????? ???????????? ????????????. */}

                                                        {/* Modal.js <main> { props.children } </main>??? ????????? ????????????.  */}
                                                    </React.Fragment>
                                                </div>
                                                <div class="col-3">
                                            <button onClick={()=>addToCart(products)} type="button" class="btn btn-outline-warning">???????????? ??????</button>
                                            <Modal2 open={modalOpen2} close={closeModal2} header="???????????? ??????"></Modal2>
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
    const renderProducts5 = () =>(
        <div>
            {products5.map((products1, idx)=>(

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
                                <h4>????????? : {products1.name}</h4>
                            </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>?????? ??????</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td> {products1.core}</td>
                                    <td> {products1.thread}</td>
                                    <td> {products1.g}</td>
                                    <td> {products1.maker}</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>?????? : {products1.cost}</h2>
                                                </div>
                                                <div class="col-2">
                                                    <React.Fragment>
                                                        <button type="button" class="btn btn-outline-primary" onClick={ ()=>confirm1(products1) }>??????</button>
                                                        <Modal open={modalOpen} close={closeModal} header="?????? ?????????"></Modal>
                                                        <Modal1 open={modalOpen1} close={closeModal1} header="???????????? ???????????????."></Modal1>
                                                        {/* header ????????? ???????????? ????????????. */}

                                                        {/* Modal.js <main> { props.children } </main>??? ????????? ????????????.  */}
                                                    </React.Fragment>
                                                </div>
                                                <div class="col-3">
                                            <button onClick={()=>addToCart(products1)} type="button" class="btn btn-outline-warning">???????????? ??????</button>
                                            <Modal2 open={modalOpen2} close={closeModal2} header="???????????? ??????"></Modal2>
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
                                <h4>????????? : {product.name}</h4>
                            </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>?????? ??????</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td> {product.core}</td>
                                    <td> {product.thread}</td>
                                    <td> {product.g}</td>
                                    <td> {product.maker}</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>?????? : {product.cost}</h2>
                                                </div>
                                                <div class="col-2">
                                                    <React.Fragment>
                                                        <button type="button" class="btn btn-outline-primary" onClick= { () => confirm2(product) }>??????</button>
                                                        <Modal open={modalOpen} close={closeModal} header="?????? ?????????"></Modal>
                                                        <Modal1 open={modalOpen1} close={closeModal1} header="???????????? ???????????????."></Modal1>
                                                        {/* header ????????? ???????????? ????????????. */}

                                                        {/* Modal.js <main> { props.children } </main>??? ????????? ????????????.  */}
                                                    </React.Fragment>
                                                </div>
                                                <div class="col-3">
                                                    
                                            <button onClick={()=>RemoveFromCart(product)} type="button" class="btn btn-outline-danger">???????????? ??????</button>
                                            <Modal2 open={modalOpen2} close={closeModal2} header="???????????? ??????"></Modal2>
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
                                <h4>????????? : {product.name}</h4>
                            </td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <span>?????? ??????</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td> {product.core}</td>
                                    <td> {product.thread}</td>
                                    <td> {product.g}</td>
                                    <td> {product.maker}</td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <div class="container">
                                            <div class="row">
                                                <div class="col-7">
                                                    <h2>?????? : {product.cost}</h2>
                                                </div>
                                                <div class="col-2">
                                                </div>
                                                <div class="col-3">
                                            <button onClick={()=>RemoveFromCart1(product)} type="button" class="btn btn-outline-danger">?????? ??????</button>
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
                        products4 = {products4}
                        products5 = {products5}
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
                        renderProducts4 = {renderProducts4}
                        renderProducts5 = {renderProducts5}
                        />
                    </Route>
                    <Route path="/" exact="exact">
                        <Home 
                        products = {products}
                        products1 = {products1}
                        products2 = {products2}
                        products3 = {products3}
                        products4 = {products4}
                        products5 = {products5}
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
                        renderProducts4 = {renderProducts4}
                        renderProducts5 = {renderProducts5}
                        user = {user}
                        checking = {checking}
                        check = {check}
                        />
                    </Route>
                    <Route path="/Game">
                        <Game
                        modalOpen = {modalOpen}
                        openModal = {openModal}
                        closeModal = {closeModal}
                        user = {user}/>
                    </Route>
                    <Route path="/Broadcast">
                        <Broadcast
                        modalOpen = {modalOpen}
                        openModal = {openModal}
                        closeModal = {closeModal}
                        user = {user}/>
                    </Route>
                    <Route path="/Office">
                        <Office
                        modalOpen = {modalOpen}
                        openModal = {openModal}
                        closeModal = {closeModal}
                        user = {user}
                        />
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
