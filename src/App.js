import React, { Component, Fragment } from 'react';
import { createPortal } from 'react-dom';
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
class App extends Component {
  render() {
    return (
      <Fragment>
        <Portals />
        <ReturnTypes />
      </Fragment>
    );
  }
}

export default App;
