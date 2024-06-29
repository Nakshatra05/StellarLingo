import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');

  const registerUser = async () => {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    });
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="App">
      <h1>StellarLingo</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={registerUser}>Register</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
