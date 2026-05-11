import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [health, setHealth] = useState("");

  const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${backendUrl}/api/message`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend not connected"));

    fetch(`${backendUrl}/api/health`)
      .then((res) => res.json())
      .then((data) => setHealth(data.message))
      .catch(() => setHealth("Health check failed"));
  }, [backendUrl]);

  return (
    <div className="container">
      <h1>CI/CD Pipeline Demo Application</h1>

      <div className="card">
        <h2>Frontend</h2>
        <p>React application is running successfully.</p>
      </div>

      <div className="card">
        <h2>Backend Response</h2>
        <p>{message}</p>
      </div>

      <div className="card">
        <h2>Health Check</h2>
        <p>{health}</p>
      </div>
    </div>
  );
}

export default App;