import React, { Component } from 'react';
import './App.css';
import { Auth } from 'aws-amplify';

import LogIn from './components/auth/login';
import Layout from './components/layouts/layout';
import Calendar from './components/calendar';

class App extends Component {
  state = {
    isAuthenticated: false,
    isAuthenticating: true,
    user: null
  }

  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    } catch(error) {
      if (error !== 'No current user') {
        console.log(error);
      }
    }
  
    this.setState({ isAuthenticating: false });
  }

  setAuthStatus = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  setUser = user => {
    this.setState({ user: user });
  }

  
  
  render() {
    console.log("user", this.state.user)

  return (
    <div className="App">
      <Layout>
      { !this.state.user ?
      <LogIn
        user={this.setUser}
        setAuthStatus={this.setAuthStatus}
      /> : (
        <Calendar/>
      )}
      </Layout>
    </div>
  );
}
}

export default App;
