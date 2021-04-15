import React, {useState, useEffect} from 'react';
import fire from './fire'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shoplist from './pages/Shoplist'
import Login from './pages/Login'
import Game from './pages/Game'
import Broadcast from './pages/Broadcast'
import Office from './pages/Office'
import More from './pages/More'
import Purchasehistory from './pages/Purchasehistory'

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

    useEffect(() => {
        authListener();
    }, [])

    return (
        <Router>
            <div className="App">

                <Navbar user={user} handleLogout={handleLogout}/>
                <div className="container">
                    <Route path="/shoplist">
                        <Shoplist/>
                    </Route>
                    <Route path="/" exact="exact">
                        <Home/>
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
