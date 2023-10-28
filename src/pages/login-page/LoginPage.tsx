import S from "./LoginPage.module.css";
import {Dispatch, SetStateAction} from "react";

interface props {
	setLogin: Dispatch<SetStateAction<boolean>>;
}
interface FormData{
	id: string;
	password: string;
}
const LoginPage = ({ setLogin }:props) => {
		
	return (
		<div className={S["page"]}>
			<img className="logo" alt="logo" src="img/logo.jpg" style={{width:"30rem"}}/>
			<div className={S["inputWrap"]}>
				<input
					className={S["input"]}
					type="text"
					name="id"
				/>
			</div>
				
			<div className={S["inputWrap"]}>
				<input
					className={S["input"]}
					name="pw"
					type="password"
				/>
			</div>

			<button className={S["bottomButton"]}>
				확인
			</button>
			<div className={S["signupContainer"]}>
				<button className="goToSignup">
					이메일로 회원가입
				</button>
			</div>
		</div>
	);
}

export default LoginPage;
