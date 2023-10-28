import S from "./HomePage.module.css";
import ContentsBox from "./contents-box/ContentsBox";
import Blank from "../../common/module/blank/Blank";

const dummy = [
    {},
    {},
    {},
    {},
]

const HomePage = () => {
    return (
        <div className={S['container']}>
            <Blank height={48} />
            { dummy.map((d, i) => {
                return <ContentsBox />
            }) }
        </div>
    );
}

export default HomePage;
