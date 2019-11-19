import React from "react";
import Background from "./inspiration-ipsum-bg.jpg";
import "./App.css";

import Header from "./Header";
import GeneratorForm from "./GeneratorForm";

interface Quote {
  author: string;
  quote: string;
}

const App: React.FC = () => {
  // useEffect(() => {
  // fetchRandomQuote();
  // }, []);

  // const fetchRandomQuote = async () => {
  // let quoteJson: Quote = await fetch("api/quotes/random").then(r => {
  // return r.json();
  // });
  // };

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
                <h3 className="small-header bigger">
                  Your Inspirational Ipsum
                </h3>
                <div className="text-block info">
                  **Hover over and click on text to see who said it
                </div>
              </div>
              <div className="quotes-output">
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
