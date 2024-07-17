import React, { useState, useEffect } from 'react';
import './App.css'; 

function HomePriceForm() {
  const [totalSqft, setTotalSqft] = useState('');
  const [location, setLocation] = useState('');
  const [bhk, setBhk] = useState(1);
  const [bath, setBath] = useState(1);
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      const response = await fetch('http://127.0.0.1:5000/get_location_names');
      const data = await response.json();
      setLocations(data.locations);
    }

    fetchLocations();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://127.0.0.1:5000/predict_home_price', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        total_sqft: totalSqft,
        location,
        bhk,
        bath,
      }),
    });

    const data = await response.json();
    setEstimatedPrice(data.estimated_price +' Lakhs');
  };

  return (
    <div>
      <h2>Home Price Prediction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Total Square Feet:</label>
          <input
            type="number"
            value={totalSqft}
            onChange={(e) => setTotalSqft(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)} required>
            <option value="">Select a location</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>BHK:</label>
          <select value={bhk} onChange={(e) => setBhk(e.target.value)} required>
            {[...Array(10).keys()].map((x) => (
              <option key={x + 1} value={x + 1}>
                {x + 1}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Bath:</label>
          <input
            type="number"
            value={bath}
            onChange={(e) => setBath(e.target.value)}
            required
          />
        </div>
        <button type="submit">Get Estimated Price</button>
      </form>
      {estimatedPrice !== null && (
        <div>
          <h3>Estimated Price: {estimatedPrice} </h3>
        </div>
      )}
    </div>
  );
}

export default HomePriceForm;
