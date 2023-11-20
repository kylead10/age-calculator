import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birth = new Date(birthDate);
    const diff = today - birth;
    const ageDate = new Date(diff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(calculatedAge);
  };

  const resetCalculator = () => {
    setBirthDate('');
    setAge('');
  };
  return (
    <div className='age-calculator'>
      <h1>Age Calculator</h1>
      <div className='input-container'>
        <label htmlFor='birthDate'>Enter your birth date: </label>
        <input
          type='date'
          id='birthDate'
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age && (
        <div>
          <p className='result'>Your age is: {age}</p>
          <button onClick={resetCalculator}>Refresh</button>
        </div>
      )}
    </div>
  );
};

export default App;
