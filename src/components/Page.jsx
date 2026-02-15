import Header from "./Header";
import { useContext } from "react";

const Page = (props) => {
  const theme = useContext(props.ThemeContext);
  return (
    <div id="app" className={theme}>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <article>
        <h2>React Course</h2>
        <p>A course that teaches you React.</p>
      </article>
    </div>
  );
};
export default Page;