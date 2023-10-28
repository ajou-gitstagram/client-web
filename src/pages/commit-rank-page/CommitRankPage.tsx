import S from './CommitRankPage.module.css';
import React, {useEffect, useState} from "react";
import type {RankModel} from "./config/model";
import {API_BASE_URL, fetchData} from "../../common/util/api";
import {HomeModel} from "../home-page/config/model";

const dummy: RankModel = [
    {
        id: "id000",
        commits: 1,
    },
    {
        id: "id111",
        commits: 4,
    },
    {
        id: "id222",
        commits: 3,
    },
    {
        id: "id333",
        commits: 7,
    },
	{
        id: "id444",
        commits: 10,
    },
	{
        id: "id555",
        commits: 5,
    },

]

interface props {
	id: string;
}



interface CommitRankModel {
	"1": { id:string; commits: number }[]
	"2": { id:string; commits: number }[]
	"3": { id:string; commits: number }[]
	"4": { id:string; commits: number }[]
	"5": { id:string; commits: number }[]
	"6": { id:string; commits: number }[]
	"7": { id:string; commits: number }[]
	"8": { id:string; commits: number }[]
	"9": { id:string; commits: number }[]
	"10": { id:string; commits: number }[]
	"11": { id:string; commits: number }[]
	"12": { id:string; commits: number }[]
}

const CommitRankPage = ({ id }: props) => {
	const [data, setData] = useState<CommitRankModel>({
		"1": [{ id: '', commits: 0 }],
		"2": [{ id: '', commits: 0 }],
		"3": [{ id: '', commits: 0 }],
		"4": [{ id: '', commits: 0 }],
		"5": [{ id: '', commits: 0 }],
		"6": [{ id: '', commits: 0 }],
		"7": [{ id: '', commits: 0 }],
		"8": [{ id: '', commits: 0 }],
		"9": [{ id: '', commits: 0 }],
		"10": [{ id: '', commits: 0 }],
		"11": [{ id: '', commits: 0 }],
		"12": [{ id: '', commits: 0 }],
	});
	const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth() + 1)
	
	const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedMonth(parseInt(e.target.value, 10));
	};

	const sortedDummy = [...dummy].sort((a, b) => b.commits - a.commits);
	
	
	useEffect(() => {
		void (async () => {
			try {
				const response = await fetchData<CommitRankModel>(`${API_BASE_URL}/rank/${id}?type=commits`, 'GET');
				setData(() => response);
				console.log(data);
			} catch {
				alert('요청에 실패하였습니다.');
			}
		})();
	}, []);
	
	return (
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
		<h2 style={{fontSize: "50px", marginBottom: "20px"}}>👨‍💻 Rank Month of {selectedMonth}</h2>
		
        <div className={S['ranking']}>
			{/*// @ts-ignore*/}
			{data[selectedMonth].map((d, i) => {
				return <ContentsBox key={d.id} data={d} rank={i + 1} />
			})}
        </div>
    </div>
  	);
}

const getMedal = (idx: number) => {
	if (idx === 1) return "🥇";
	else if (idx === 2) return "🥈";
	else if (idx === 3) return "🥉";
	else return "";
}

const ContentsBox: React.FC<{ data: { id: string, commits: number }, rank: number }> = ({ data, rank }) => {
    return (
        <div className={S['rankItem']}>
            <span className={S['rank']}>{rank}{getMedal(rank)}</span>
            <span className={S['id']}>{data.id}</span>
            <span className={S['commits']}>{data.commits} commits</span>
        </div>
    );
}

export default CommitRankPage;
