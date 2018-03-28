import React, { Component } from 'react';
import './App.css';
import ChannelsList from './components/ChannelsList';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="navbar">React + GraphQL Tutorial</div>
          <ChannelsList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
