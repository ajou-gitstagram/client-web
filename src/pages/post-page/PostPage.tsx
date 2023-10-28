import S from './PostPage.module.css';
import Blank from "../../common/module/blank/Blank";
import {Dispatch, SetStateAction, useState} from "react";

interface props {
	id: string;
}

const handleInputPost = (e: any, setContents: Dispatch<SetStateAction<string>>) => {
	setContents(e.target.value);
}

const handleInputTags = (e: any, setTags: Dispatch<SetStateAction<string[]>>) => {
	setTags(() => e.target.value.split(',').map((d: string) => d.trim()));
}

const handleSubmit = (e: any, id: string, contents: string, tags: string[]) => {
	const submit = { id, contents, tags }
	console.log(submit);
}

const PostPage = ({ id }: props) => {
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
			<button onClick={(e) => handleSubmit(e as unknown as MouseEvent, id, contents, tags)} className={S['post-submit']}>Submit</button>
		</div>
	);
}

export default PostPage;
