import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import AddChannel from './AddChannel';

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
        <div className="channelsList">
          <AddChannel />
          {data.channels.map(channel => (
            <div key={channel.id} className="channel">
              {channel.name}
            </div>
          ))}
        </div>
      );
    }}
  </Query>
);

export default ChannelsList;
