import "./LoginPage.module.css";
import {Dispatch, SetStateAction} from "react";

interface props {
	setLogin: Dispatch<SetStateAction<boolean>>;
}

const LoginPage = ({ setLogin }:props) => {
	return (<p>login</p>);
}

export default LoginPage;
