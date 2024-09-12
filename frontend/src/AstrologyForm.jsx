import { useState } from 'react';
import axios from 'axios';
import './AstrologyForm.css';

const AstrologyForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [starSign, setStarSign] = useState('');
  const [tob, setTob] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://t3bwl5b8-8000.inc1.devtunnels.ms/astrology',
        {
          name,
          age,
          star_sign: starSign,
          tob,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setResult(response.data.fr);
    } catch (error) {
      console.error(error);
      setResult('An error occurred. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="astrology-container">
      <div className="astrology-background"></div>
      <div className="astrology-content">
        <h1 className="astrology-title">Astrology Fun</h1>
        <form className="astrology-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="starSign">Star Sign:</label>
            <input
              id="starSign"
              type="text"
              value={starSign}
              onChange={(e) => setStarSign(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tob">Time of Birth:</label>
            <input
              id="tob"
              type="text"
              value={tob}
              onChange={(e) => setTob(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={isLoading ? 'loading' : ''} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Get Astrology Info'}
          </button>
        </form>
        {result && (
          <div className="astro-result">
            <h2>Your Astrology Information:</h2>
            <div dangerouslySetInnerHTML={{ __html: result }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AstrologyForm;