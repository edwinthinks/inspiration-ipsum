import React, { useState } from "react";
import Background from "./inspiration-ipsum-bg.jpg";
import "./App.css";

import Header from "./Header";
import GeneratorForm from "./GeneratorForm";
import Quote from "./Quote";

interface QuoteData {
  author: string;
  quote: string;
}

const App: React.FC = () => {
  const [quotes] = useState([
    {
      author: "Steve Jobs",
      quote:
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it."
    },
    {
      author: "Walt Disney",
      quote:
        "We keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths."
    },
    {
      author: "Augustine of Hippo",
      quote:
        "Hope has two beautiful daughters; their names are Anger and Courage. Anger at the way things are, and Courage to see that they do not remain as they are."
    },
    {
      author: "Lakota",
      quote: "When a man moves away from nature his heart becomes hard."
    },
    {
      author: "Walt Disney",
      quote: "It's kind of fun to do the impossible."
    }
  ]);

  const [quoteAuthor, setQuoteAuthor] = useState("");

  const onSubmit = (paragraphCount: string): void => {
    console.log(paragraphCount);
  };

  return (
    <div className="content" style={{ backgroundImage: `url(${Background})` }}>
      <div className="content-container">
        <Header
          title={"Inspiration Ipsum"}
          subTitle={"The MOST MOVING text placeholder Generator"}
        />
        <div className="body-container">
          <div className="main-container">
            <div className="instruction-container">
              <GeneratorForm onSubmit={onSubmit} />
            </div>
            <div className="quotes-container">
              <div className="quotes-header">
                <div className="quotes-title">
                  <h3 className="small-header bigger">
                    Your Inspirational Ipsum
                  </h3>
                  <div className="text-block info">
                    **Hover over and click on text to see who said it
                  </div>
                </div>
                {quoteAuthor && (
                  <div className="who-said-it">
                    <h3 className="small-header author">
                      <span role="img" className="emoji" aria-label='microphone'>
                        🎤
                      </span>
                      {quoteAuthor}
                    </h3>
                  </div>
                )}
              </div>
              <div className="quotes-output">
                <div className="quotes">
                  {quotes.map((q, idx) => {
                    return (
                      <Quote
                        author={q.author}
                        quote={q.quote}
                        key={idx}
                        onMouseEnter={() => setQuoteAuthor(q.author)}
                        onMouseLeave={() => setQuoteAuthor("")}
                      />
                    );
                  })}
                </div>
                <div className="quotes">
                  <span className="quote">
                    Be yourself; everyone else is already taken.{" "}
                  </span>
                  <span className="quote">
                    Be the change that you wish to see in the world. Darkness
                    cannot drive out darkness: only light can do that. Hate
                    cannot drive out hate: only love can do that.{" "}
                  </span>
                  <span className="quote">
                    Without music, life would be a mistake.{" "}
                  </span>
                  <span className="quote">
                    There are only two ways to live your life. One is as though
                    nothing is a miracle. The other is as though everything is a
                    miracle.
                  </span>
                </div>
                <div className="quotes">
                  <span className="quote">
                    Be yourself; everyone else is already taken.{" "}
                  </span>
                  <span className="quote">
                    Be the change that you wish to see in the world. Darkness
                    cannot drive out darkness: only light can do that. Hate
                    cannot drive out hate: only love can do that.{" "}
                  </span>
                  <span className="quote">
                    Without music, life would be a mistake.{" "}
                  </span>
                  <span className="quote">
                    There are only two ways to live your life. One is as though
                    nothing is a miracle. The other is as though everything is a
                    miracle.
                  </span>
                </div>
                <div className="quotes">
                  <span className="quote">
                    Be yourself; everyone else is already taken.{" "}
                  </span>
                  <span className="quote">
                    Be the change that you wish to see in the world. Darkness
                    cannot drive out darkness: only light can do that. Hate
                    cannot drive out hate: only love can do that.{" "}
                  </span>
                  <span className="quote">
                    Without music, life would be a mistake.{" "}
                  </span>
                  <span className="quote">
                    There are only two ways to live your life. One is as though
                    nothing is a miracle. The other is as though everything is a
                    miracle.
                  </span>
                </div>
                <div className="quotes">
                  <span className="quote">
                    There is no greater agony than bearing an untold story
                    inside you. To the well-organized mind, death is but the
                    next great adventure.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="information-container">
            <h3 className="small-header bigger">Information</h3>
            <div className="text-block">
              <strong>
                Generate a lorem ipsum with a inspiration twist! This
                application generates paragraphs using inspiration quotes
                sourced from{" "}
              </strong>
              <a href="https://www.goodreads.com/quotes/tag/inspirational">
                <strong className="link">goodreads.com</strong>
              </a>
              <strong>
                <br />
              </strong>
              <br />
              Source can be found{" "}
              <a
                href="https://github.com/edwinthinks/inspiration-ipsum"
                className="link"
              >
                here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
