import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching dog image:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        dogImage && <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;