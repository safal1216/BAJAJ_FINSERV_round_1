import React, { useState } from 'react';

function Form({ setResponse }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jsonInput = JSON.parse(input);
      const response = await fetch('http://your-backend-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonInput),
      });
      const data = await response.json();
      setResponse(data);
      setError('');
    } catch (err) {
      setError('Invalid JSON input');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter JSON'
      />
      <button type="submit">Submit</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default Form;