import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    let response = await fetch("api/quotes/random");
    let quoteJson = response.json();

    setRandomQuote(quoteJson);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Inspiration Ipsum </h1>
        {randomQuote && (
          <div>
            <label>
              <span role="img" aria-label="Finger pointing down">
                👇
              </span>{" "}
              Fetched random quote data from express api{" "}
              <span role="img" aria-label="Finger pointing down">
                👇
              </span>
            </label>
            <p>{randomQuote.quote}</p>
            <p>{`- ${randomQuote.author}`}</p>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
