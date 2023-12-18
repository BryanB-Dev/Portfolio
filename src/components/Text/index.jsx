import "./style.scss";

export default function Text({ text, size = 1.2 }) {
    let formattedContent = text;
    if (!Array.isArray(text)) {
        formattedContent = [text];
    }

    formattedContent = formattedContent.map((line, lineIndex) => {
        const parts = line.split(/(%[^%]+%|\/n)/g);
        const content = parts.map((part, index) => {
            if (part.startsWith('%') && part.endsWith('%')) {
                const innerText = part.substring(1, part.length - 1);
                return <span key={index} className="primaryColor">{innerText}</span>;
            } else if (part === '/n') {
                return <br key={index} />;
            } else {
                return part;
            }
        });

        // Ajout de <br/> après chaque ligne sauf la dernière
        const isLastLine = lineIndex === formattedContent.length - 1;
        return isLastLine ? <p className="text" style={{ fontSize: `${size}em` }} key={lineIndex}>{content}</p> : <p className="text" style={{ fontSize: `${size}em` }} key={lineIndex}>{content}<br /></p>;
    });

    return (
    <>
        {formattedContent}
    </>
    );
}
