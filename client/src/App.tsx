import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    fetch("/api/quotes")
      .then((res: any) => res.json())
      .then(quotes => {
        setQuotes(quotes);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {quotes && (
          <div>
            <label>👇 Fetched quotes data from express api 👇</label>
            <p>{JSON.stringify(quotes)}</p>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
