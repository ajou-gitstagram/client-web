import S from './RankPage.module.css';
import React, {useState, useEffect, ReactComponentElement, ReactHTMLElement} from "react";
import type {RankModel} from "./config/model";

const dummy: RankModel = [
    {
        id: "id000",
        commits: 1,
		rank: 0,
    },
    {
        id: "id111",
        commits: 4,
		rank: 0,
    },
    {
        id: "id222",
        commits: 3,
		rank: 0,
    },
    {
        id: "id333",
        commits: 7,
		rank: 0,
    },
	{
        id: "id444",
        commits: 10,
		rank: 0,
    },
	{
        id: "id555",
        commits: 5,
		rank: 0,
    },

]

const RankPage = () => {
	const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1)
	
	const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedMonth(parseInt(e.target.value, 10));
	};

	const sortedDummy = [...dummy].sort((a, b) => b.commits - a.commits);
	
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
		<h2 style={{fontSize: "50px", marginBottom: "20px"}}>{selectedMonth} 이 달의 랭킹</h2>
		
        <div className={S['ranking']}>
			{sortedDummy.map((d, i) => {
				return <ContentsBox key={d.id} data={d} rank={i + 1} />
			})}
        </div>
    </div>
  	);
}

const ContentsBox: React.FC<{ data: { id: string, commits: number }, rank: number }> = ({ data, rank }) => {
    return (
        <div className={S['rankItem']}>
            <span className={S['rank']}>{rank}</span>
            <span className={S['id']}>{data.id}</span>
            <span className={S['commits']}>{data.commits} commits</span>
        </div>
    );
}

export default RankPage;
