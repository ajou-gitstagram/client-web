import S from "./LikeRankPage.module.css";
import {HomeModel} from "../home-page/config/model";
import Blank from "../../common/module/blank/Blank";
import React, {useState} from "react";

const dummy: HomeModel = [
	{
		uid: 1,
		id: "id000",
		content: "contentscontents",
		like: 90,
		tag: ["tag1", "tag2", "tag3"]
	},
	// {
	// 	uid: 2,
	// 	id: "id111",
	// 	content: "contentscontents",
	// 	like: 109,
	// 	tags: ["tag1", "tag2", "tag3"]
	// },
	// {
	// 	uid: 3,
	// 	id: "id222",
	// 	content: "contentscontents",
	// 	like: 98,
	// 	tags: ["tag1", "tag2", "tag3"]
	// },
	// {
	// 	uid: 4,
	// 	id: "id333",
	// 	content: "contentscontents",
	// 	like: 97,
	// 	tags: ["tag1", "tag2", "tag3"]
	// },
	// {
	// 	uid: 5,
	// 	id: "id222",
	// 	content: "contentscontents",
	// 	like: 10,
	// 	tags: ["tag1", "tag2", "tag3"]
	// },
    // {
	// 	uid: 6,
	// 	id: "id333",
	// 	content: "contentscontents",
	// 	like: 20,
	// 	tags: ["tag1", "tag2", "tag3"]
	// },
]

const LikeRankPage = () => {

	const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1)
	
	const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedMonth(parseInt(e.target.value, 10));
	};
	const aggregateById = (data: HomeModel) => {
		const aggregatedData: { [id: string]: { id: string, like: number, uid: number } } = {};
	 
		data.forEach(item => {
		  if (aggregatedData[item.id]) {
			aggregatedData[item.id].like += item.like;
		  } else {
			// id가 처음 등장한 경우, 해당 item을 그대로 복사하여 넣습니다.
			aggregatedData[item.id] = { ...item };
		  }
		});
	 
		// 객체를 배열로 변환
		return Object.values(aggregatedData);
	};

	const aggregatedDummy = aggregateById(dummy)
	const sortedDummy = [...aggregatedDummy].sort((a, b) => b.like - a.like);

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
			<h2 style={{fontSize: "50px", marginBottom: "20px"}}>🧡 Sum Rank Month of {selectedMonth}</h2>
		
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

const ContentsBox: React.FC<{ data: { id: string, like: number }, rank: number}> = ({ data, rank }) => {
 
	return (
        <div className={S['rankItem']}>
			<span className={S["rank"]}>{rank}{getMedal(rank)}</span>
            <span className={S['id']}>{data.id}</span>
            <span className={S['likes']}>{data.like} 🧡</span>
        </div>
    );
}

export default LikeRankPage;
