import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChannelsList from './components/ChannelsList';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { InMemoryCache } from 'apollo-client-preset'
import { typeDefs } from './schema';
import { SchemaLink } from 'apollo-link-schema';

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

const client = new ApolloClient({
  link: new SchemaLink({ schema }),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Apollo</h1>
          </header>
          <ChannelsList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
