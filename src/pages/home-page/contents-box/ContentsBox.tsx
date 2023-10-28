import S from './ContentsBox.module.css';
import {HomeData} from "../config/model";

interface props {
	data: HomeData
}

const ContentsBox = ({ data }: props) => {
	return (
		<article className={S['container']}>
			<p className={S['content-id']}>@{data.id}</p>
			<hr />
			<p className={S['content-content']}>{data.contents}</p>
			<hr />
			<div className={'flex space-between'}>
				<div>
					{data.tags.map((d) => <span className={S['content-tag']}>#{d}</span>)}
				</div>
				<div className={S['content-like']}>
					<span>♡ </span>
					<span>{data.likes}</span>
				</div>
			</div>
		</article>
	);
}

export default ContentsBox;
