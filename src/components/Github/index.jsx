import "./style.scss";
import Title from "../Title";
import GitHubCalendar from "react-github-calendar";

export default function Github({ user }) {

  const minimalTheme = {
    light: ['#444', 'hsla(272, 85%, 74%, 0.44)', 'hsla(272, 85%, 74%, 0.6)', 'hsla(272, 85%, 74%, 0.76)', 'hsla(272, 85%, 74%, 0.92)'],
    dark: ['#FFF', 'hsla(272, 85%, 74%, 0.44)', 'hsla(272, 85%, 74%, 0.6)', 'hsla(272, 85%, 74%, 0.76)', 'hsla(272, 85%, 74%, 0.92)']
  };

  return (
    <div className="github">
      <Title text="Contributions %GitHub%" size={2.3} />
      <GitHubCalendar
        username={user}
        blockSize={15}
        blockMargin={5}
        theme={minimalTheme}
        fontSize={16}
        style={{display: "flex"}}
      />
    </div>
  );
}
