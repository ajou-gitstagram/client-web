import React from 'react';
import './App.css';
import './common/reset.css';
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import RankPage from "./pages/rank-page/RankPage";
import LoginPage from "./pages/login-page/LoginPage";
import SignupPage from "./pages/signup-page/SignupPage";
import PostPage from "./pages/post-page/PostPage";
import Header from "./common/module/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/login"} element={<LoginPage />} />
                <Route path={"/signup"} element={<SignupPage />} />
                <Route path={"/rank"} element={<RankPage />} />
                <Route path={"/post"} element={<PostPage />} />
            </Routes>
        </div>
    );
}

export default App;
