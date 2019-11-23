import React from "react";
import { render, fireEvent } from "@testing-library/react";

import App from "./App";

test("renders random quote text and the title", async () => {
  let quote = {
    author: "Steve Jobs",
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it"
  };

  const { queryByText } = render(<App />);

  let quoteElement = queryByText(quote.quote);
  expect(quoteElement).not.toBeNull();

  expect(queryByText(quote.author)).toBeNull();

  fireEvent.mouseEnter(quoteElement);

  expect(queryByText(quote.author)).not.toBeNull();

  fireEvent.mouseLeave(quoteElement);

  expect(queryByText(quote.author)).toBeNull();
});
