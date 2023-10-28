import S from './Navigator.module.css';
import {Link} from "react-router-dom";
import {Dispatch, SetStateAction} from "react";

interface props {
	setLogin: Dispatch<SetStateAction<boolean>>
	setId: Dispatch<SetStateAction<string>>
}

const Navigator = ({ setLogin, setId }: props) => {
	return (
		<nav className={S['navigator-container']}>
			<Link to={'/'}>
				<div className={S['navigator-item']}>🏠 Home</div>
			</Link>
			<Link to={'/rank'}>
				<div className={S['navigator-item']}>👑 Ranks</div>
			</Link>
			<Link to={'/honor'}>
				<div className={S['navigator-item']}>🎊 Honors</div>
			</Link>
			<Link to={'/credits'}>
				<div className={S['navigator-item']}>🙇‍ Credits</div>
			</Link>
			<Link to={'/login'} onClick={() => { setLogin(false); setId(""); }}>
				<div className={S['navigator-item']}>🔓‍ Logout</div>
			</Link>
		</nav>
	);
}

export default Navigator;
