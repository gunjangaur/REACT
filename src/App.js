import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { meaningOfLife: 47 };
  }

  /*changeState = ()=>{
    this.setState({meaningOfLife: this.state.meaningOfLife+1})
  }*/

  changeState = () => {
    this.setState(
      (prevState, prevProps) => {
        return {meaningOfLife: prevState.meaningOfLife + prevProps.increment};
      },
      () => {
        console.log(this.state.meaningOfLife);
      }
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.meaningOfLife}</p>
          <button onClick={this.changeState}>Change State</button>
        </header>
      </div>
    );
  }
}

export default App;
