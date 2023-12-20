import "./style.scss";
import About from "../../components/About";
import ProfileData from "../../data/profile.json";

export default function Profile() {

    return (
        <>
            <About datas={ProfileData} />
        </>
    );
}
