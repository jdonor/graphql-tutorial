import React from 'react';
import { Query,} from 'react-apollo';
import gql from 'graphql-tag';

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

export default ChannelsList;
