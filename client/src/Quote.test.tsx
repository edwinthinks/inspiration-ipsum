import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Quote from "./Quote";

test("that the quote is rendered and hovering over it triggers hover", async () => {
  let props: object = {
    author: "Author",
    quote: "Fake Quote",
    onMouseEnter: jest.fn(),
    onMouseLeave: jest.fn()
  };

  // Use the defined props as a spread operator. It is the same
  // as doing `title={'Fake Title'}`
  const { getByText } = render(<Quote {...props} />);

  let quote = getByText(props.quote);
  expect(quote).not.toBeNull();

  expect(props.onMouseEnter.mock.calls.length).toBe(0);

  fireEvent.mouseEnter(quote);

  expect(props.onMouseEnter.mock.calls.length).toBe(1);
  expect(props.onMouseLeave.mock.calls.length).toBe(0);

  fireEvent.mouseLeave(quote);

  expect(props.onMouseLeave.mock.calls.length).toBe(1);
});
