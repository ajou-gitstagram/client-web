import S from './Navigator.module.css';
import {Link, useLocation} from "react-router-dom";
import {Dispatch, SetStateAction, useEffect, useState} from "react";

interface props {
	setLogin: Dispatch<SetStateAction<boolean>>
	setId: Dispatch<SetStateAction<string>>
}

const Navigator = ({ setLogin, setId }: props) => {
	const location = useLocation();
	
	const [selected, setSelected] = useState('/');
	
	useEffect(() => {
		setSelected(location.pathname);
	}, [location]);
	
	return (
		<nav className={S['navigator-container']}>
			<Link to={'/'}>
				<div className={[S['navigator-item'], (selected === '/' ? S['selected'] : [''])].join(' ')}>
					<span>🏠</span>
					<span>Home</span>
				</div>
			</Link>
			<Link to={'/commit-rank'}>
				<div className={[S['navigator-item'], (selected === '/commit-rank' ? S['selected'] : [''])].join(' ')}>
					<span>👑</span>
					<span>Commit Ranks</span>
				</div>
			</Link>
			<Link to={'/posting-rank'}>
				<div className={[S['navigator-item'], (selected === '/posting-rank' ? S['selected'] : [''])].join(' ')}>
					<span>👨‍💻</span>️
					<span>Posting Ranks</span>
				</div>
			</Link>
			<Link to={'/like-rank'}>
				<div className={[S['navigator-item'], (selected === '/like-rank' ? S['selected'] : [''])].join(' ')}>
					<span>❤️</span>
					<span>Like Ranks</span>
				</div>
			</Link>
			<Link to={'/honor'}>
				<div className={[S['navigator-item'], (selected === '/honor' ? S['selected'] : [''])].join(' ')}>
					<span>🎊</span>
					<span>Honors</span>
				</div>
			</Link>
			<Link to={'/credits'}>
				<div className={[S['navigator-item'], (selected === '/credits' ? S['selected'] : [''])].join(' ')}>
					<span>🙇</span>
					<span>Credits</span>
			</div>
			</Link>
			<Link to={'/login'} onClick={() => { setLogin(false); setId(""); }}>
				<div className={[S['navigator-item'], (selected === '/logout' ? S['selected'] : [''])].join(' ')}>
					<span>🔓</span>
					<span>Logout</span>
				</div>
			</Link>
		</nav>
	);
}

export default Navigator;
