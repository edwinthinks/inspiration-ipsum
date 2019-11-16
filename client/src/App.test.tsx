import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

test("renders random quote text and the title", async () => {
  let fakeQuote = {
    author: "Fake Author",
    quote: "Fake Quote"
  };

  jest.spyOn(window, "fetch").mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => {
        return fakeQuote;
      }
    });
  });

  const { findByText } = render(<App />);

  // Check Title
  await findByText("Inspiration Ipsum");

  // These will throw an error if they cannot find
  // the matching text.
  //
  // Note - if it is going to fail it wil take
  // a few seconds to realize it. Perhaps could
  // add a timeout setting.
  await findByText(fakeQuote.quote);
  await findByText(`- ${fakeQuote.author}`);
});
