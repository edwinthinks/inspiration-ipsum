import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

test("that it has the title and the subtitle provided", async () => {
  let props: object = {
    title: "Fake Title",
    subTitle: "Fake Subtitle"
  };

  // Use the defined props as a spread operator. It is the same
  // as doing `title={'Fake Title'}`
  const { getByText } = render(<Header {...props} />);

  getByText(props.title);
  getByText(props.subTitle);
});
