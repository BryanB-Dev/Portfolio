import Title from "../Title";
import "./style.scss";

export default function Introduction() {
    return (
        <div className="introduction">
            <Title text="LET ME %INTRODUCE% MYSELF" size={2.5}/>
            <p className="introduction__text">
                I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️<br />
                <br />
                I am fluent in classics like <span className="primaryColor">C++, Javascript and Go.</span><br />
                <br />
                My field of Interest's are building new  Web Technologies and Products and also in areas related to Blockchain.<br />
                <br />
                Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js and Next.js
            </p>
        </div>
    )
}