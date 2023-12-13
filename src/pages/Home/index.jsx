import HomeSvg from "../../components/HomeSvg";
import Name from "../../components/Name";
import Particle from "../../components/Particle";
import Type from "../../components/Type";
import "./style.scss";

export default function Home() {

    return (
        <>
        <Particle />
        <div className="homeSection">
            <div className="homeSection__text">
                <Name />
                <Type />
            </div>
            <HomeSvg />
        </div>
        </>
    );
}
