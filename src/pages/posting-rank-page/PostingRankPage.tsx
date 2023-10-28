import S from "./PostingRankPage.module.css";
import {HomeData, HomeModel} from "../home-page/config/model";
import React, {useState, useEffect} from "react";
import {API_BASE_URL, fetchData} from "../../common/util/api";

const dummy: HomeModel = [
	{
		uid: 1,
		id: "id000",
		content: "contentscontents",
		like: 90,
		tags: ["tag1", "tag2", "tag3"]
	},
	{
		uid: 2,
		id: "id111",
		content: "contentscontents",
		like: 109,
		tags: ["tag1", "tag2", "tag3"]
	},
	{
		uid: 3,
		id: "id222",
		content: "contentscontents",
		like: 98,
		tags: ["tag1", "tag2", "tag3"]
	},
	{
		uid: 4,
		id: "id333",
		content: "contentscontents",
		like: 97,
		tags: ["tag1", "tag2", "tag3"]
	},
	{
		uid: 5,
		id: "id222",
		content: "contentscontents",
		like: 10,
		tags: ["tag1", "tag2", "tag3"]
	},
    {
		uid: 6,
		id: "id333",
		content: "contentscontents",
		like: 20,
		tags: ["tag1", "tag2", "tag3"]
	},
]

interface props {
	id: string;
}
interface PostRankData {
	uid: number;
	id: string;
	content: string;
	like: number;
	tag: string[];
}

const PostingRankPage = ({id}:props) => {
	const [data, setData] = useState<PostRankData[]>([]);
	const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1)
	
	const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedMonth(parseInt(e.target.value, 10));
	};
	useEffect(() => {
		void (async () => {
			try {
				const response = await fetchData<PostRankData[]>(`${API_BASE_URL}/rank/${id}?type=likes`, 'GET');
				setData(() => response);
				console.log(data);
			} catch {
				alert('요청에 실패하였습니다.');
			}
		})();
	  }, []);

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
			<h2 style={{fontSize: "50px", marginBottom: "20px"}}>👨‍💻 Posting Rank Month of {selectedMonth}</h2>
		
			<div className={S['ranking']}>
				{ data.map((d, i) => {
					const {id, like, content} = d;
					return <ContentsBox data={{id, like, content}} rank={i+1}/>
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

const ContentsBox: React.FC<{ data: { id: string, like: number, content: string }, rank: number}> = ({ data, rank }) => {
 
	return (
		<article className={S['container']}>
			<p className={S['content-id']}>{getMedal(rank)} {rank}등 @{data.id}</p>
			<hr />
			<p className={S['content-content']}>{data.content}</p>
			<hr />	
			<div className={'flex space-between'}>	
			</div>
		</article>
    );
}

export default PostingRankPage;
