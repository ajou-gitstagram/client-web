import React, {useEffect, useState} from 'react';
import './App.css';
import './common/reset.css';
import './common/common.css';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import HonorPage from "./pages/honors-page/HonorPage";
import CommitRankPage from "./pages/commit-rank-page/CommitRankPage";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
import PostPage from "./pages/post-page/PostPage";
import Header from "./common/module/header/Header";
import Navigator from "./common/module/navigator/Navigator";
import Container from "./common/module/container/Container";
import PostingRankPage from "./pages/posting-rank-page/PostingRankPage";
import CreditPage from "./pages/credit-page/CreditPage";

function App() {
    const [login, setLogin] = useState(true);
    const [id, setId] = useState("");
    // FIXME:: default is false on prod
    
    useEffect(() => {
        localStorage.setItem('likedUid', '[]');
    }, []);
    
    return (
        <div className="App">
            {login && <Header />}
            {
                <div className={'flex'}>
                    {login && <Navigator setLogin={setLogin} setId={setId} />}
                    <Container>
                        <Routes>
                            <Route path={"/"} element={<HomePage />} />
                            <Route path={"/login"} element={<LoginPage setLogin={setLogin} setId={setId} />} />
                            <Route path={"/signup"} element={<SignupPage />} />
                            <Route path={"/commit-rank"} element={<CommitRankPage />} />
                            <Route path={"/posting-rank"} element={<PostingRankPage />} />
                            <Route path={"/post"} element={<PostPage id={id} />} />
                            <Route path={"/honor"} element={<HonorPage />} />
                            <Route path={"/credits"} element={<CreditPage />} />
                        </Routes>
                    </Container>
                </div>
            }
        </div>
    );
}

export default App;
