import React, { Component } from 'react';

class Layouts extends Component {

  render() {
    return (
      <div>
        <header className="header">
            <span>Where is Inga?</span>
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default Layouts;
