import React from "react";
import Battle from "./Battle";
import Popular from "./Popular";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      theme: "light",
    };
  }
  changeTheme = () => {
    const root = window.document.documentElement;
    let theme = this.state.theme === "light" ? "dark" : "light";
    root.className = theme;
    this.setState({
      theme,
    });
  };
  render() {
    return (
      <div className="dark:bg-zinc-700 h-screen overflow-y-scroll">
        <Popular />
        {/* <Battle /> */}
      </div>
    );
  }
}
export default App;
