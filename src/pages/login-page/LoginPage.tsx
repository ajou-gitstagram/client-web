import "./LoginPage.module.css";
import {Dispatch, SetStateAction} from "react";

interface props {
	setLogin: Dispatch<SetStateAction<boolean>>;
}
interface FormData{
	id: string;
	password: string;
}
const LoginPage = ({ setLogin }:props) => {
		<div className="page">
	return (
			<img className="logo" alt="logo" src="img/logo.jpg" style={{width:"700px"}}/>
			<div className='inputWrap'>
				<input
					className="input"
					type="text"
					name="id"
				</input>
				>
			</div>
				<input
			<div className="inputWrap">
					className="input"
					name="pw"
					type="password"
				>
				</input>
			</div>
			<button className="bottomButton">
			</button>
				확인
				<div className="line"></div>
			<div className="signupContainer">
				<button className="goToSignup">
					이메일로 회원가입
				<div className="line"></div>
				</button>
		</div>
	);
			</div>
}

export default LoginPage;
