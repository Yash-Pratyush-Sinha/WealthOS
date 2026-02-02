import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("Waiting for server...");

  useEffect(() => {
    // This connects to your Backend Brain
    fetch('http://localhost:5000/')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => {
        console.log(err);
        setMessage("Server Offline 🔴");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Stock Trading Engine 📉</h1>
      <h2>Status: {message}</h2>
    </div>
  );
}

export default App;