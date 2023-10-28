import S from './ContentsBox.module.css';
import {HomeData} from "../config/model";
import {Dispatch, SetStateAction, useEffect, useState} from "react";

interface props {
	data: HomeData
}

const handleClickLike = (setLiked: Dispatch<SetStateAction<boolean>>, liked: boolean, setLikeCount: Dispatch<SetStateAction<number>>, uid: number) => {
	const likedUid: number[] = JSON.parse(localStorage.getItem('likedUid') || '[]');
	
	setLiked((prev) => !prev);
	if (liked) {
		likedUid.forEach((d) => {
			if (uid === d) { // @ts-ignore
				likedUid.pop(d);
			}
		});
		setLikeCount((prev) => prev - 1);
	}
	if (!liked) {
		likedUid.push(uid);
		setLikeCount((prev) => prev + 1);
	}
	localStorage.setItem('likedUid', JSON.stringify(likedUid));
	
	//TODO:: API CONNECT
}

const ContentsBox = ({ data }: props) => {
	const [liked, setLiked] = useState(false);
	const [likeCount, setLikeCount] = useState(0);
	
	useEffect(() => {
		setLikeCount(data.like);
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
				<div onClick={() => handleClickLike(setLiked, liked, setLikeCount, data.uid)} className={S['content-like']}>
					<span>{liked ? "❤️ " : "♡ "}</span>
					<span>{likeCount}</span>
				</div>
			</div>
		</article>
	);
}

export default ContentsBox;
