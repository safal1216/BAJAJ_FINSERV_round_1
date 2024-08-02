import React from 'react';

function Dropdown({ setSelectedOptions }) {
  const handleChange = (e) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedOptions(options);
  };

  return (
    <select multiple onChange={handleChange}>
      <option value="Alphabets">Alphabets</option>
      <option value="Numbers">Numbers</option>
      <option value="Highest alphabet">Highest alphabet</option>
    </select>
  );
}

export default Dropdown;