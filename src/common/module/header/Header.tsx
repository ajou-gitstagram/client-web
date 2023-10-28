import S from './Header.module.css';

const Header = () => {
	return (
		<header className={S['header-container']}>
			<img className={S['header-logo']} src={'/img/logo.jpg'} />
		</header>
	);
}

export default Header;
