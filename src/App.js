import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';

class ErrorMaker extends Component {
  state = {
    friends: ["Frodo", "Eric", "Billy", "Sangwon"]
  }
  
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        friends: undefined
      });
    }, 2000);
  }

  render() {
    const { friends } = this.state;
    return friends.map(friend => ` ${friend} `);
  }
}

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

const Message = () => "Just touch it!";

class ReturnTypes extends Component {
  render() {
    return "hello";
  }
}

const ErrorFallback = () => " Sorry Something went wrong";
class App extends Component {
  state = {
    hasError: false
  };

  componentDidCatch = (err, info) => {
    console.log(`${err}, ${JSON.stringify(info)}`);
    this.setState({
      hasError: true
    });
  }

  render() {
    const { hasError } = this.state;

    return (
      <Fragment>
        <Portals />
        <ReturnTypes />
        {hasError ? <ErrorFallback/> : <ErrorMaker /> }
      </Fragment>
    );
  }
}

export default App;
