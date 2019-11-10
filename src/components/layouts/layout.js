import React, { Component } from 'react';

class Layouts extends Component {

  render() {
    console.log(this.props)
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
