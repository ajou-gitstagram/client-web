import S from "./SignupPage.module.css";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
	const navigation = useNavigate();
	const handleChange = () => {
		navigation("/login");
	};
	return (
		<div className={S["page"]}>
			<img className="logo" alt="logo" src="img/logo.png" style={{width:"30rem"}}/>
			<div className={S["inputTitle"]}>깃 아이디</div>
			<div className={S["inputWrap"]}>
				<input
					className={S["input"]}
					type="text"
					name="id"
				/>
			</div>
			<div className={S["inputTitle"]}>비밀번호</div>
			<div className={S["inputWrap"]}>
				<input
					className={S["input"]}
					name="pw"
					type="password"
				/>
			</div>
			<div className={S["inputTitle"]}>비밀번호 확인</div>
			<div className={S["inputWrap"]}>
				<input
					className={S["input"]}
					name="pw"
					type="password"
				/>
			</div>
			<button className={S["bottomButton"]} onClick={handleChange}>
				회원가입
			</button>
		</div>
	);
}

export default SignupPage;
