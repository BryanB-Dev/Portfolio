import Main from "../../components/Main";
import Introduction from "../../components/Introduction";
import HomeData from "../../data/home.json";
import "./style.scss";

export default function Home() {

    return (
        <>
            <Main datas={HomeData} />
            <Introduction datas={HomeData} />
        </>
    );
}
