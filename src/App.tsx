import React, {useState} from 'react';
import './App.css';
import './common/reset.css';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import RankPage from "./pages/rank-page/RankPage";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
import PostPage from "./pages/post-page/PostPage";
import Header from "./common/module/header/Header";
import Navigator from "./common/module/navigator/Navigator";

function App() {
    const [login, setLogin] = useState(true);
    // FIXME:: default is false on prod
    
    return (
        <div className="App">
            {login &&
                <>
                    <Header />
                    <Navigator />
                </>
            }
            
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/login"} element={<LoginPage setLogin={setLogin} />} />
                <Route path={"/signup"} element={<SignupPage />} />
                <Route path={"/rank"} element={<RankPage />} />
                <Route path={"/post"} element={<PostPage />} />
            </Routes>
        </div>
    );
}

export default App;
