import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  ticker() {
    this.setState({ date: new Date() });
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.ticker();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <div className="App">
        <h1>Time</h1>
        <h2>{this.state.date.toLocaleTimeString("en-GB")}</h2>
      </div>
    );
  }
}

export default App;
