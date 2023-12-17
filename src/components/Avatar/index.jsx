import avatar from "../../assets/avatar.svg";
import "./style.scss";

export default function Avatar() {
    return (
        <img className="avatar" src={avatar} alt="" />
    )
}