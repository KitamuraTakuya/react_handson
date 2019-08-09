import React from "react";
import ReactDOM from "react-dom";
import Msg from "./component/Msg";
import ColofulMsg from "./component/ColofulMsg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    const newcount = this.state.count + 1;
    this.setState({ count: newcount });
  };
  render() {
    return (
      <>
        <h2>Reactハンズオン！</h2>
        <ColofulMsg color="blue" message="こんにちは" />
        <ColofulMsg color="green" message="僕は" />
        <ColofulMsg color="red" message="げんきです" />
        <button onClick={this.handleClick}>{this.state.count}</button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
