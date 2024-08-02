import React, { useState } from 'react';
import Form from './components/form';
import Dropdown from './components/dropdown';
import ResponseDisplay from './components/display';
import './App.css';

function App() {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div className="App">
      <Form setResponse={setResponse} />
      {response && (
        <>
          <Dropdown setSelectedOptions={setSelectedOptions} />
          <ResponseDisplay response={response} selectedOptions={selectedOptions} />
        </>
      )}
    </div>
  );
}

export default App;