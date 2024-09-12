import { useState } from 'react';
import axios from 'axios';

const AstrologyForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [starSign, setStarSign] = useState('');
  const [tob, setTob] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async () => {
    console.log(name, age, starSign, tob);
    try {
      const response = await axios.post(
        'http://localhost:5000/astrology',
        {
          name,
          age,
          starSign,
          tob,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Astrology Fun</h1>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(val) => setName(val.target.value)}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(val) => setAge(val.target.value)}
          />
        </div>
        <div>
          <label>Star Sign:</label>
          <input
            type="text"
            value={starSign}
            onChange={(val) => setStarSign(val.target.value)}
          />
        </div>
        <div>
          <label>Time of Birth:</label>
          <input
            type="text"
            value={tob}
            onChange={(val) => setTob(val.target.value)}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Get Astrology Info
        </button>
      </form>
      {result && (
        <div>
          <h2>Your Astrology Information:</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default AstrologyForm;
