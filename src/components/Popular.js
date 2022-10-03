import React from "react";
class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      language: null,
    };
  }
  async componentDidMount() {
    let { language } = this.state;
    const all =
      "https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories";
    const res = await fetch(all);
    const data = await res.json();
    language = data.items.slice(0, 20);
    this.setState({
      language,
    });
  }
  render() {
    return <div>Popular</div>;
  }
}
export default Popular;
