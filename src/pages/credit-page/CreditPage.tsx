import S from './CreditPage.module.css';
import Blank from "../../common/module/blank/Blank";

const CreditPage = () => {
	return (
		<div className={S['container']}>
			<Blank height={150} />
			<p style={{fontSize: "30px"}}>Made by</p>
			<p style={{fontSize: "30px"}}>&lt; The Critical Guys &gt;</p>
			<br />
			<p>김민규 Frontend, "The critical guy"</p>
			<br />
			<p>정현수 Backend, "Waiting for chicken"</p>
			<br />
			<p>허태림 Backend, "Carry Machine"</p>
			<br />
			<p>이민서 Frontend, "Fight for peace"</p>
		</div>
	)
}

export default CreditPage;
