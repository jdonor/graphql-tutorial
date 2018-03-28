import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_CHANNEL = gql`
  mutation addChannel($type: String!) {
    addChannel(type: $type) {
      id
      name
    }
  }
`;

const AddChannel = () => {
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      console.log(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <input
      type="text"
      placeholder="New channel"
      onKeyUp={handleKeyUp}
    />
  );
};

export default AddChannel;
