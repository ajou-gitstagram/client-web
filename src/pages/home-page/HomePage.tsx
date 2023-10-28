import S from "./HomePage.module.css";
import ContentsBox from "./contents-box/ContentsBox";
import Blank from "../../common/module/blank/Blank";
import type {HomeModel} from "./config/model";
import PostCreateButton from "./post-create-button/PostCreateButton";

const dummy: HomeModel = [
    {
        id: "id000",
        contents: "contentscontents",
        likes: 0,
        tags: ["tag1", "tag2", "tag3"]
    },
    {
        id: "id111",
        contents: "contentscontents",
        likes: 1,
        tags: ["tag1", "tag2", "tag3"]
    },
    {
        id: "id222",
        contents: "contentscontents",
        likes: 2,
        tags: ["tag1", "tag2", "tag3"]
    },
    {
        id: "id333",
        contents: "contentscontents",
        likes: 3,
        tags: ["tag1", "tag2", "tag3"]
    },
]

const HomePage = () => {
    return (
        <div className={S['container']}>
            <Blank height={48} />
            { dummy.map((d, i) => {
                return <ContentsBox data={d} />
            }) }
            <PostCreateButton />
        </div>
    );
}

export default HomePage;
