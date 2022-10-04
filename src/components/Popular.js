import React from "react";
import Loader from "./Loader";
import Repos from "./Repos";
class Popular extends React.Component {
  constructor(props) {
    super();
    this.state = {
      language: null,
      repos: [],
    };
  }
  async componentDidMount() {
    this.fetchRepo("All");
  }

  fetchRepo = async (language) => {
    this.setState({
      language: null,
    });
    const url = `https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    this.setState({
      language,
      repos: data.items || [],
    });
  };

  render() {
    const languages = ["All", "JavaScript", "Python", "Ruby", "Java", "CSS"];
    return (
      <div className="container mx-auto text-gray-700">
        <div className="flex justify-center items-center space-x-8 py-4">
          {languages.map((language) => {
            return (
              <p
                onClick={() => this.fetchRepo(language)}
                className={`font-bold cursor-pointer dark:text-white ${
                  language === this.state.language
                    ? "text-rose-600 dark:text-rose-600"
                    : ""
                }`}
                key={language}
              >
                {language}
              </p>
            );
          })}
        </div>
        {!this.state.language ? <Loader /> : <Repos repos={this.state.repos} />}
      </div>
    );
  }
}
export default Popular;
