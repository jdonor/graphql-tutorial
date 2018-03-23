import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ApolloClient from 'apollo-client';
import { Query, graphql, ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

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

const ChannelsList = () => (
  <Query
    query={gql`
      {
        channels {
          id
          name
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error.message}</p>;

      return (
        <ul>
          {data.channels.map(channel => <li key={channel.id}>{channel.name}</li>)}
        </ul>
      );
    }}
  </Query>
);

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
