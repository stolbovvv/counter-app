import { Component } from 'react';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incCount = () => {
    if (this.state.count < 50) {
      this.setState((state) => ({ count: state.count + 1 }));
    }
  };

  decCount = () => {
    if (this.state.count > -50) {
      this.setState((state) => ({ count: state.count - 1 }));
    }
  };

  rndCount = () => this.setState({ count: Math.floor(Math.random() * 101 - 50) });
  resCount = () => this.setState({ count: 0 });

  render() {
    const { count } = this.state;

    return (
      <div className="app">
        <div className="app__counter">{count}</div>
        <div className="app__controls">
          <button className="app__button" type="button" onClick={this.incCount} disabled={count >= 50 ? true : false}>
            inc
          </button>
          <button className="app__button" type="button" onClick={this.decCount} disabled={count <= -50 ? true : false}>
            dec
          </button>
          <button className="app__button" type="button" onClick={this.rndCount}>
            rnd
          </button>
          <button className="app__button" type="button" onClick={this.resCount}>
            res
          </button>
        </div>
      </div>
    );
  }
}

export default App;
