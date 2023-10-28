import S from './PostPage.module.css';
import Blank from "../../common/module/blank/Blank";
import {Dispatch, SetStateAction, useState} from "react";
import {API_BASE_URL, fetchData} from "../../common/util/api";
import {BrowserRouter, Navigation, redirect, useNavigate, useNavigation} from "react-router-dom";

interface props {
	id: string;
}

const handleInputPost = (e: any, setContents: Dispatch<SetStateAction<string>>) => {
	setContents(e.target.value);
}

const handleInputTags = (e: any, setTags: Dispatch<SetStateAction<string[]>>) => {
	setTags(() => e.target.value.split(',').map((d: string) => d.trim()));
}

const handleSubmit = (e: any, id: string, contents: string, tags: string[], nav: any) => {
	const submit = { id, contents, tags }
	console.log(submit);
	try {
		fetchData<{}>(`${API_BASE_URL}/post?id=${id}&contents=${contents}&tags=${JSON.stringify(tags)}`, 'GET');
		alert("게시글이 정상적으로 등록되었습니다.");
		nav('/');
	} catch(e) {
		console.error(e);
	}
}

const PostPage = ({ id }: props) => {
	const nav = useNavigate();
	
	const [contents, setContents] = useState<string>("");
	const [tags, setTags] = useState<string[]>([]);
	
	return (
		<div className={S['container']}>
			<h2 className={S['post-title']}>Write your gitstagram @{id}</h2>
			<textarea onInput={(e) => handleInputPost(e, setContents)} className={S['post-area']} />
			<br />
			<Blank height={32} />
			<h3 className={S['post-subtitle']}>Tags (split by ,)</h3>
			<input onInput={(e) => handleInputTags(e, setTags)} id={'postTags'} className={S['post-tag-input']} />
			<button onClick={(e) => handleSubmit(e as unknown as MouseEvent, id, contents, tags, nav)} className={S['post-submit']}>Submit</button>
		</div>
	);
}

export default PostPage;
