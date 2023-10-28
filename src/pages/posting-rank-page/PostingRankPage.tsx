import S from "./PostingRankPage.module.css";
import {HomeModel} from "../home-page/config/model";
import Blank from "../../common/module/blank/Blank";
import React, {useState} from "react";

const dummy: HomeModel = [
	{
		uid: 1,
		id: "id000",
		contents: "contentscontents",
		likes: 90,
		tags: ["tag1", "tag2", "tag3"]
	},
	{
		uid: 2,
		id: "id111",
		contents: "contentscontents",
		likes: 109,
		tags: ["tag1", "tag2", "tag3"]
	},
	{
		uid: 3,
		id: "id222",
		contents: "contentscontents",
		likes: 98,
		tags: ["tag1", "tag2", "tag3"]
	},
	{
		uid: 4,
		id: "id333",
		contents: "contentscontents",
		likes: 97,
		tags: ["tag1", "tag2", "tag3"]
	},
]

const PostingRankPage = () => {

	const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1)
	
	const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedMonth(parseInt(e.target.value, 10));
	};

	const sortedDummy = [...dummy].sort((a, b) => b.likes - a.likes);

	return (
	<div>
		<div>
			<div style={{marginTop:"10%"}}>
				<label htmlFor="month">Month:</label>
				<select id="month" value={selectedMonth} onChange={handleMonthChange}>
				{Array.from({ length: 12 }, (_, index) => index + 1).map((month) => (
					<option key={month} value={month}>
					{month}
					</option>
				))}
				</select>
			</div>
			<h2 style={{fontSize: "50px", marginBottom: "20px"}}>🧡 Rank Month of {selectedMonth}</h2>
		
			<div className={S['ranking']}>
				{ sortedDummy.map((d, i) => {
					return <ContentsBox data={d} rank={i+1}/>
				}) }
			</div>
		</div>
	</div>
	);
};

const getMedal = (idx: number) => {
	if (idx === 1) return "🥇";
	else if (idx === 2) return "🥈";
	else if (idx === 3) return "🥉";
	else return "";
}

const ContentsBox: React.FC<{ data: { id: string, likes: number }, rank: number}> = ({ data, rank }) => {
   
	return (
        <div className={S['rankItem']}>
			<span className={S["rank"]}>{rank}{getMedal(rank)}</span>
            <span className={S['id']}>{data.id}</span>
            <span className={S['likes']}>{data.likes} 🧡</span>
        </div>
    );
}

export default PostingRankPage;
