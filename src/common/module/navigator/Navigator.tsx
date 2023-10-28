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
				<div className={S['navigator-item']}>
					<span>🏠</span>
					<span>Home</span>
				</div>
			</Link>
			<Link to={'/commit-rank'}>
				<div className={S['navigator-item']}>
					<span>👑</span>
					<span>Commit Ranks</span>
				</div>
			</Link>
			<Link to={'/posting-rank'}>
				<div className={S['navigator-item']}>
					<span>❤️</span>️
					<span>Posting Ranks</span>
				</div>
			</Link>
			<Link to={'/honor'}>
				<div className={S['navigator-item']}>
					<span>🎊</span>
					<span>Honors</span>
				</div>
			</Link>
			<Link to={'/credits'}>
				<div className={S['navigator-item']}>
					<span>🙇</span>
					<span>Credits</span>
			</div>
			</Link>
			<Link to={'/login'} onClick={() => { setLogin(false); setId(""); }}>
				<div className={S['navigator-item']}>
					<span>🔓</span>
					<span>Logout</span>
				</div>
			</Link>
		</nav>
	);
}

export default Navigator;
