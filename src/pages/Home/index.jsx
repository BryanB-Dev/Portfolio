import Name from "../../components/Name";
import Type from "../../components/Type";
import "./style.scss";

export default function Home() {

    return (
        <>
            <div className="homeSection">
                <div className="homeSection__text">
                    <Name />
                    <Type />
                </div>
            </div>
        </>
    );
}
