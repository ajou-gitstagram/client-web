import S from "./LoginPage.module.css";
import {Dispatch, SetStateAction, useState} from "react";
import { useNavigate } from "react-router-dom";

interface props {
	setLogin: Dispatch<SetStateAction<boolean>>;
	setId: Dispatch<SetStateAction<string>>;
}
interface FormData{
	id: string;
	password: string;
}
const LoginPage = ({ setLogin, setId }:props) => {
	const [formData, setFormData] = useState<FormData>({ id: "", password: "" });
	const navigation = useNavigate();
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};
  
	const handleLogin = () => {
		// Perform login logic here, and then update state with the obtained id
		setId(formData.id);
		setLogin(true);
		console.log(formData.id);
		navigation("/");
	};
	const goToSignUp = () => {
		navigation("/signup")
	}

	return (
		<div className={S["page"]}>
			<img className="logo" alt="logo" src="img/logo.jpg" style={{width:"30rem"}}/>
			<div className={S["inputTitle"]}>깃 아이디</div>
			<div className={S["inputWrap"]}>
				<input
					className={S["input"]}
					type="text"
					name="id"
					onChange={handleChange}
				/>
			</div>
			<div className={S["inputTitle"]}>비밀번호</div>	
			<div className={S["inputWrap"]}>
				<input
					className={S["input"]}
					name="pw"
					type="password"
					onChange={handleChange}
				/>
			</div>

			<button className={S["bottomButton"]} onClick={handleLogin}>
				로그인
			</button>
			<div className={S["signupContainer"]}>
				<button className={S["goToSignup"]} onClick={goToSignUp}>
					깃 아이디로 회원가입
				</button>
			</div>
		</div>
	);
}

export default LoginPage;
