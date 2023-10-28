import S from "./PostingRankPage.module.css";
import {HomeModel} from "../home-page/config/model";
import Blank from "../../common/module/blank/Blank";
import ContentsBox from "../home-page/contents-box/ContentsBox";
import React from "react";

const dummy: HomeModel = [
	{
		id: "id000",
		contents: "contentscontents",
		likes: 100,
		tags: ["tag1", "tag2", "tag3"]
	},
	{
		id: "id111",
		contents: "contentscontents",
		likes: 99,
		tags: ["tag1", "tag2", "tag3"]
	},
	{
		id: "id222",
		contents: "contentscontents",
		likes: 98,
		tags: ["tag1", "tag2", "tag3"]
	},
	{
		id: "id333",
		contents: "contentscontents",
		likes: 97,
		tags: ["tag1", "tag2", "tag3"]
	},
]

const PostingRankPage = () => {
	return (
		<div className={S['container']}>
			<Blank height={48} />
			<h2 style={{fontSize: "50px", marginBottom: "20px"}}>Month of </h2>
			{ dummy.map((d, i) => {
				return (
					<>
						<ContentsBox data={d} />
					</>
				);
			}) }
		</div>
	);
};

export default PostingRankPage;
