import S from "./HonorPage.module.css";
import type {HonorModel} from "./config/model";

const dummy: HonorModel = [
    {
        id: "taerim",
        winCount: 7,
		contents: "감사합니다감사합니다감사합니다",
        rank: 0,
    },
    {
        id: "mmmm",
        winCount: 1,
		contents: "내 아래로 다 차렷!!!!",
        rank: 0,
    },
    {
        id: "kmkkkp",
        winCount: 7,
		contents: "반갑습니다~ 소통해요~",
        rank: 0,
    },
    {
        id: "jhnah917",
        winCount: 10,
		contents: "justiceHui.github.io",
        rank: 0,
    },
	{
        id: "Muzi-HS",
        winCount: 5,
		contents: "I love AJOU",
        rank: 0,
    },
	{
        id: "jjunhub",
        winCount: 3,
		contents: "의예과20",
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
