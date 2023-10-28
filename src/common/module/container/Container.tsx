import S from './Container.module.css';
import {ReactNode} from "react";

interface props {
	children: ReactNode;
}

const Container = ({ children }: props) => {
	return <div className={S['container']}>{children}</div>;
};

export default Container;
