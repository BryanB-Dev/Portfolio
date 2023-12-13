import "./style.scss";

export default function Name() {
    return (
        <div className="name">
            <p className="name__text">Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span></p>
            <h1 className="name__title">I'M <span className="primaryColor">BRYAN</span></h1>
        </div>
    )
}