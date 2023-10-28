import React, {useState} from 'react';
import './App.css';
import './common/reset.css';
import './common/common.css';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import RankPage from "./pages/rank-page/RankPage";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
import PostPage from "./pages/post-page/PostPage";
import Header from "./common/module/header/Header";
import Navigator from "./common/module/navigator/Navigator";
import Container from "./common/module/container/Container";

function App() {
    const [login, setLogin] = useState(true);
    const [id, setId] = useState("");
    // FIXME:: default is false on prod
    
    return (
        <div className="App">
            {login && <Header />}
            {
                <div className={'flex'}>
                    {login && <Navigator/>}
                    <Container>
                        <Routes>
                            <Route path={"/"} element={<HomePage />} />
                            <Route path={"/login"} element={<LoginPage setLogin={setLogin} setId={setId} />} />
                            <Route path={"/signup"} element={<SignupPage />} />
                            <Route path={"/rank"} element={<RankPage />} />
                            <Route path={"/post"} element={<PostPage id={id} />} />
                        </Routes>
                    </Container>
                </div>
            }
        </div>
    );
}

export default App;
