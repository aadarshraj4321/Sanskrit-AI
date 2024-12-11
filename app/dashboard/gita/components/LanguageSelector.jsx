import React from 'react';

const LanguageSelector = ({ setLanguage }) => {
  return (
    <div className="my-4">
      <label className="mr-2">Select Language: </label>
      <select
        onChange={(e) => setLanguage(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="english">English</option>
        <option value="hindi">Hindi</option>
        <option value="sanskrit">Sanskrit</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
