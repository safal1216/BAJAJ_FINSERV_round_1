import React from 'react';

function ResponseDisplay({ response, selectedOptions }) {
  const filterResponse = () => {
    let filteredResponse = {};
    if (selectedOptions.includes('Alphabets')) {
      filteredResponse.alphabets = response.alphabets;
    }
    if (selectedOptions.includes('Numbers')) {
      filteredResponse.numbers = response.numbers;
    }
    if (selectedOptions.includes('Highest alphabet')) {
      filteredResponse.highestAlphabet = response.highestAlphabet;
    }
    return filteredResponse;
  };

  const filteredResponse = filterResponse();

  return (
    <div>
      <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
    </div>
  );
}

export default ResponseDisplay;