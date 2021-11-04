import React, { useEffect, useState } from 'react';
import './App.css';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setResponse(data);
    });

  }, []);
  
  return (
    <div className="App">
      <div>{response}</div>
    </div>
  );
}

export default App;
