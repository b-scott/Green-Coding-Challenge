import React from 'react';
import logo from './images/logo-r.svg'
import './styles/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('Welcome, ' + this.state.value + '.');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="wrapper">
          <div className="formWrapper">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Example login screen</h1>
            <p id="intro">Getting started with Green.</p>
            <p id="email">Email Address</p>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <div class="checkbox-toolbar">
            <input type="checkbox" id="checkbox1" name="checkbox" value="all" checked/>
            <label for="checkbox1">Remember this device</label>
            </div>
            <input type="submit" value="Sign in" />
          </div>
        </div>
        </form>
    );
  }
}

export default App;
