import S from "./HomePage.module.css";
import ContentsBox from "./contents-box/ContentsBox";
import Blank from "../../common/module/blank/Blank";
import type {HomeModel} from "./config/model";
import PostCreateButton from "./post-create-button/PostCreateButton";
import {useEffect, useState} from "react";
import {fetchData, API_BASE_URL} from "../../common/util/api";

const dummy: HomeModel = [
    {
        uid: 1,
        id: "id000",
        content: "contentscontents",
        like: 0,
        tags: ["tag1", "tag2", "tag3"]
    },
    {
        uid: 2,
        id: "id111",
        content: "contentscontents",
        like: 1,
        tags: ["tag1", "tag2", "tag3"]
    },
    {
        uid: 3,
        id: "id222",
        content: "contentscontents",
        like: 2,
        tags: ["tag1", "tag2", "tag3"]
    },
    {
        uid: 4,
        id: "id333",
        content: "contentscontents",
        like: 3,
        tags: ["tag1", "tag2", "tag3"]
    },
]


interface props {
    id: string
}

const HomePage = ({ id }: props) => {
    const [data, setData] = useState<HomeModel>([
        {
            uid: 0,
            id: "aa",
            content: "bb",
            like: 0,
            tags: ["dd"]
        }
    ]);
    
    useEffect(() => {
        void (async () => {
            try {
                const response = await fetchData<HomeModel>(`${API_BASE_URL}/home?id=${id}`, 'GET');
                setData(() => response);
                console.log(data);
            } catch {
                alert('요청에 실패하였습니다.');
            }
        })();
    }, []);
    
    return (
        <div className={S['container']}>
            <Blank height={48} />
            { data.map((d, i) => {
                return <ContentsBox key={`cb-${i}`} data={d} />
            }) }
            <PostCreateButton />
        </div>
    );
}

export default HomePage;
