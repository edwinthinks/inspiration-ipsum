import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import GeneratorForm from "./GeneratorForm";

test("that it has the title and a paragraphs form that submits", async () => {
  // Add a fake jest.fn() that should be triggered on submit
  let onSubmitFn = jest.fn();

  const { getByText, getByLabelText } = render(
    <GeneratorForm onSubmit={onSubmitFn} />
  );

  getByText("Generate Your Ipsum");

  // Check the default value
  let paragraphField = getByLabelText("Paragraphs");
  expect(paragraphField.value).toBe("3");

  let newParagraphCount = "4";
  fireEvent.change(paragraphField, { target: { value: newParagraphCount } });

  // Check that the value has changed;
  expect(paragraphField.value).toBe(newParagraphCount);

  let submitButton = getByText("Generate Ipsum");

  userEvent.click(submitButton);

  // Submits and the function is called.
  expect(onSubmitFn.mock.calls.length).toBe(1);
  expect(onSubmitFn.mock.calls[0][0]).toBe(newParagraphCount);
});
