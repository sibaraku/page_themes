const Header = (props) => {
  return (
    <header>
      <h1>Demo website</h1>
      <button
        onClick={() => {
          props.setTheme(props.theme === "dark" ? "light" : "dark");
        }}>
        Toggle Theme
        </button>
    </header>
  );
};

export default Header;