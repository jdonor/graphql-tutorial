import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_CHANNEL = gql`
  mutation addChannel($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`;

const AddChannel = () => (
  <Mutation mutation={ADD_CHANNEL}>
    {addChannel => (
      <input
        type="text"
        placeholder="New channel"
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            addChannel({ variables: { name: e.target.value } });
            e.target.value = '';
          }
        }}
      />
    )}
  </Mutation>
);

export default AddChannel;
