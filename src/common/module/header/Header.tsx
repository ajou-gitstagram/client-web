import S from './Header.module.css';
import {Link} from "react-router-dom";

const Header = () => {
	return (
		<Link to={'/'}>
			<header className={S['header-container']}>
				<img className={S['header-logo']} src={'/img/logo.jpg'}/>
			</header>
		</Link>
	);
}

export default Header;
