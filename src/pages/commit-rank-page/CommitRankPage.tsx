import S from './CommitRankPage.module.css';
import React, {useState} from "react";
import type {RankModel} from "./config/model";

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

const CommitRankPage = () => {
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
		<h2 style={{fontSize: "50px", marginBottom: "20px"}}>👨‍💻 Rank Month of {selectedMonth}</h2>
		
        <div className={S['ranking']}>
			{sortedDummy.map((d, i) => {
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
