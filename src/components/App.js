import React from "react";
import { Route, Switch } from "react-router-dom";
import Battle from "./Battle";
import Header from "./Header";
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
        <Header theme={this.state.theme} changeTheme={this.changeTheme} />
        <Switch>
          <Route exact path="/">
            <Popular />
          </Route>

          <Route path="/battle">
            <Battle />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default App;
