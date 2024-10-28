import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Activity() {
  const [activity, setActivity] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchActivity = async () => {
    setLoading(true);
    try {
      // Fetch quote from Simpsons API
      const response = await axios.get('https://thesimpsonsquoteapi.glitch.me/quotes');
      // Extract the quote from the first element of the array
      setActivity(response.data[0].quote);  // Corrected
    } catch (error) {
      console.error('Error fetching activity:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivity();
  }, []);

  const handleRefresh = () => {
    fetchActivity();
  };

  return (
    <div className="bg-cover bg-center h-[635.2px] overflow-y-hidden overscroll-auto" style={{ backgroundImage: `url(https://img.freepik.com/free-vector/paper-style-dynamic-lines-background_23-2149008629.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714953600&semt=ais)` }}>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-center mt-20">
          <h2 className="text-white text-2xl font-bold mb-2">Random Quote:</h2>
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : (
            <div>
              <p className="text-white text-2xl">{activity}</p>  {/* Display the quote */}
              <button onClick={handleRefresh} className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600">Change it</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Activity;
