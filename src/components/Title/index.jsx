import "./style.scss";

export default function Title({ text, size=2.1 }) {
    const parts = text.split(/(%[^%]+%)/g);
    const renderedParts = parts.map((part, index) => {
        if (part.startsWith('%') && part.endsWith('%')) {
            const content = part.substring(1, part.length - 1);
            return <span key={index} className="primaryColor">{content}</span>;
        } else {
            return part;
        }
    });

    return <h2 className="title" style={{fontSize:`${size}em`}}>{renderedParts}</h2>;
}