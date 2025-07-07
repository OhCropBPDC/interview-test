import React, { useState } from "react";
import TypewriterText from './TypeWriter';
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const handleLogEvent = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: "button_click",
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await res.json();
      setMessage(data.message);
    } catch (err) {
      setMessage("Failed to log event.");
      console.error(err);
    }
  };

  return (
    <div className="container">

      <img src="public/club-logo.png" alt="Club Logo" className="club-logo" />
    
      <TypewriterText text="Welcome to the interview round" speed={150} />
      <div className="image-wrapper">
        <img src="/img1.png" alt="img1" className="img overlap" />
        <img src="/img2.png" alt="img2" className="img overlap" />
        <img src="/img3.png" alt="img3" className="img overlap" />
      </div>

      <button className="log-btn" onClick={handleLogEvent}>
        Log Event
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
