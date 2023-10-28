import S from './Navigator.module.css';
import {Link} from "react-router-dom";

const Navigator = () => {
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
			<Link to={'/login'}>
				<div className={S['navigator-item']}>🔓‍ Logout</div>
			</Link>
		</nav>
	);
}

export default Navigator;
