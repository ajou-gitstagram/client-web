import S from "./HonorPage.module.css";
import type {HonorModel} from "./config/model";

const dummy: HonorModel = [
    {
        id: "id000",
        winCount: 1,
		contents: "응~ 드루와~",
        rank: 0,
    },
    {
        id: "id111",
        winCount: 4,
		contents: "커밋 못 따라오쥬~~",
        rank: 0,
    },
    {
        id: "id222",
        winCount: 7,
		contents: "ㅎㅇ들~",
        rank: 0,
    },
    {
        id: "id333",
        winCount: 10,
		contents: "아주대 화이팅~",
        rank: 0,
    },
	{
        id: "id444",
        winCount: 5,
		contents: "HI Ajou",
        rank: 0,
    },
	{
        id: "id555",
        winCount: 3,
		contents: "ㅋㅋ",
        rank: 0,
    },

]

const HonorPage = () => {

    const sortedDummy = [...dummy].sort((a, b) => b.winCount - a.winCount);

    return(
        <div style={{marginTop:"11.5%"}}>
            <h2 style={{fontSize: "50px", marginBottom: "20px"}}>✨소융대 명예의 전당✨</h2>
            <div className={S['HonorItem']}>
                <span className={S['rank']} style={{fontWeight: "bold"}}>등수</span>
                <span className={S['id']} style={{fontWeight: "bold"}}>ID</span>
                <span className={S['winCount']} style={{fontWeight: "bold"}}>우승횟수</span>
                <span className={S['contents']} style={{fontWeight: "bold"}}>한줄소감</span>
            </div>
            <div className={S['ranking']}>
                {sortedDummy.map((d, i) => {
                    return <ContentsBox key={d.id} data={d} rank={i + 1} />
                })}
            </div>
        </div>
        
    )
}


const ContentsBox: React.FC<{ data: { id: string, winCount: number, contents: string }, rank: number }> = ({ data, rank }) => {
    return (
        <div className={S['HonorItem']}>
            <span className={S['rank']}>{rank}</span>
            <span className={S['id']}>{data.id}</span>
            <span className={S['winCount']}>{data.winCount} 회</span>
            <span className={S['contents']}>{data.contents}</span>
        </div>
    );
}

export default HonorPage;