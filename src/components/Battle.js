import React from "react";
import Instructions from "./Instructions";
import { BsXLg } from "react-icons/bs";
import Player from "./Player";
class Battle extends React.Component {
  constructor(props) {
    super();
    this.state = {
      player1: "",
      player2: "",
      player1Info: null,
      player2Info: null,
      player1Score: "",
      player2Score: "",
      errors: {
        player1Info: "",
        player2Info: "",
      },
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmitPlayer1 = async (e) => {
    e.preventDefault();
    const url = `https://api.github.com/users/${this.state.player1}`;
    const res = await fetch(url);
    const data = await res.json();
    let errors = this.state.errors;

    if (data.message === "Not Found") {
      errors.player1Info = "no user of this name";
      this.setState({
        player1: "",
        errors,
      });
      return;
    }
    errors.player1Info = "";
    this.setState({
      player1Info: data,
      player1: "",
      errors,
    });
  };

  handleSubmitPlayer2 = async (e) => {
    e.preventDefault();
    const url = `https://api.github.com/users/${this.state.player2}`;
    const res = await fetch(url);
    const data = await res.json();
    let errors = this.state.errors;
    if (data.message === "Not Found") {
      errors.player2Info = "no user of this name";
      this.setState({
        player2: "",
        errors,
      });
      return;
    }
    errors.player2Info = "";
    this.setState({
      player2Info: data,
      player2: "",
      errors,
    });
  };

  handleBattle = () => {
    let { player1Info, player2Info, player1Score, player2Score } = this.state;
    player1Score = player1Info.followers * 20 + player1Info.public_repos;
    player2Score = player2Info.followers * 20 + player2Info.public_repos;
    console.log(player1Score, player2Score);
    this.setState({
      player1Score,
      player2Score,
    });
  };

  handleDelete = (player) => {
    if (player === "player1") {
      this.setState({
        player1Info: null,
      });
    } else {
      this.setState({
        player2Info: null,
      });
    }
  };

  handleReset = () => {
    this.setState({
      player1Score: "",
      player2Score: "",
      player1Info: null,
      player2Info: null,
    });
  };

  render() {
    const {
      player1Info,
      player2Info,
      player1,
      player2,
      player1Score,
      player2Score,
    } = this.state;

    let player1Result, player2Result;
    if (player1Score === player2Score) {
      player1Result = "Tie";
      player2Result = "Tie";
    } else if (player1Score > player2Score) {
      player1Result = "Winner";
      player2Result = "Loser";
    } else if (player1Score < player2Score) {
      player1Result = "Loser";
      player2Result = "Winner";
    } else {
      player1Result = "";
      player2Result = "";
    }

    return (
      <div className="container mx-auto text-gray-700">
        {!player1Score && !player2Score && <Instructions />}
        {!player1Score && !player2Score && (
          <div className="mt-14">
            <h1 className="text-center text-3xl">Players</h1>
            <div className="grid grid-cols-2 gap-5 my-6">
              <div>
                <h2 className="mb-2 text-xl">Player One</h2>
                {!player1Info && (
                  <form onSubmit={this.handleSubmitPlayer1}>
                    <input
                      className="shadow-inner border p-2 mr-6 w-[70%] rounded-lg"
                      placeholder="github username"
                      name="player1"
                      value={player1}
                      autoComplete="off"
                      onChange={(e) => this.handleChange(e)}
                    />
                    <button
                      disabled={!player1 ? true : false}
                      className="uppercase tracking-widest py-2 px-6 bg-gray-700 text-white rounded-lg disabled:bg-gray-300"
                      type="submit"
                    >
                      Submit
                    </button>
                    <p className="text-red-400 text-sm">
                      {this.state.errors.player1Info}
                    </p>
                  </form>
                )}

                {player1Info && (
                  <div className="flex justify-between items-center bg-gray-50 p-4 w-[90%]">
                    <div className="flex items-center space-x-4">
                      <img
                        className="w-[50px] h-[50px] rounded-full"
                        src={player1Info.avatar_url}
                      />
                      <h4>{player1Info.login}</h4>
                    </div>
                    <button onClick={() => this.handleDelete("player1")}>
                      <BsXLg />
                    </button>
                  </div>
                )}
              </div>

              <div>
                <h2 className="mb-2 text-xl">Player Two</h2>

                {!player2Info && (
                  <form onSubmit={this.handleSubmitPlayer2}>
                    <input
                      className="shadow-inner border p-2 inline-block mr-6 w-[70%] rounded-lg"
                      placeholder="github username"
                      autoComplete="off"
                      name="player2"
                      value={player2}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <button
                      disabled={!player2 ? true : false}
                      className="uppercase tracking-widest py-2 px-6 bg-gray-700 text-white rounded-lg disabled:bg-gray-300"
                      type="submit"
                    >
                      Submit
                    </button>
                    <p className="text-red-400 text-sm">
                      {this.state.errors.player2Info}
                    </p>
                  </form>
                )}
                {player2Info && (
                  <div className="flex justify-between items-center bg-gray-50 p-4 w-[90%]">
                    <div className="flex items-center space-x-4">
                      <img
                        className="w-[50px] h-[50px] rounded-full"
                        src={player2Info.avatar_url}
                      />
                      <h4>{player2Info.login}</h4>
                    </div>
                    <button onClick={() => this.handleDelete("player2")}>
                      <BsXLg />
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="text-center my-14">
              {player1Info && player2Info && (
                <button
                  className="uppercase tracking-widest py-2 px-6 bg-gray-700 text-white rounded-lg"
                  onClick={this.handleBattle}
                >
                  Battle
                </button>
              )}
            </div>
          </div>
        )}
        {player1Score && player2Score && (
          <div>
            <div className="flex justify-center items-center space-x-8">
              <Player
                player={player1Info}
                score={player1Score}
                result={player1Result}
              />

              <Player
                player={player2Info}
                score={player2Score}
                result={player2Result}
              />
            </div>
            <div className="text-center my-14">
              <button
                className="uppercase tracking-widest py-2 px-6 bg-gray-700 text-white rounded-lg"
                onClick={this.handleReset}
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Battle;
