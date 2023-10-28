import S from './ContentsBox.module.css';
import {HomeData} from "../config/model";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {API_BASE_URL, fetchData} from "../../../common/util/api";

interface props {
	data: HomeData
}

const handleClickLike = (setLiked: Dispatch<SetStateAction<boolean>>, liked: boolean, setLikeCount: Dispatch<SetStateAction<number>>, likeCount: number, data: HomeData) => {
	const likedUid: number[] = JSON.parse(localStorage.getItem('likedUid') || '[]');
	let _cnt: number = 0;
	
	setLiked((prev) => !prev);
	if (liked) {
		likedUid.forEach((d) => {
			if (data.uid === d) { // @ts-ignore
				likedUid.pop(d);
			}
		});
		setLikeCount((prev) => prev - 1);
		_cnt = likeCount - 1;
	}
	if (!liked) {
		likedUid.push(data.uid);
		setLikeCount((prev) => prev + 1);
		_cnt = likeCount + 1;
	}
	localStorage.setItem('likedUid', JSON.stringify(likedUid));
	
	fetchData<{}>(`${API_BASE_URL}/home?id=${data.id}&uid=${data.uid}&like=${_cnt}`, 'GET');
}

const ContentsBox = ({ data }: props) => {
	const [liked, setLiked] = useState(false);
	const [likeCount, setLikeCount] = useState(0);
	
	useEffect(() => {
		setLikeCount(Number(data.like));
	}, [data]);
	
	useEffect(() => {
		const likedUid: number[] = JSON.parse(localStorage.getItem('likedUid') || '[]');
		likedUid.forEach((d) => {
			if (data.uid === d) setLiked(true);
		});
	}, [data]);
	
	
	return (
		<article className={S['container']}>
			<p className={S['content-id']}>@{data.id}</p>
			<hr />
			<p className={S['content-content']}>{data.content}</p>
			<hr />
			<div className={'flex space-between'}>
				<div>
					{
						Array.isArray(data) ?
						// @ts-ignore
						data.tags.map((d) => <span className={S['content-tag']}>#{d}</span>)
						: data.tags
					}
				</div>
				<div onClick={() => handleClickLike(setLiked, liked, setLikeCount, likeCount, data)} className={S['content-like']}>
					<span>{liked ? "❤️ " : "♡ "}</span>
					<span>{likeCount}</span>
				</div>
			</div>
		</article>
	);
}

export default ContentsBox;
