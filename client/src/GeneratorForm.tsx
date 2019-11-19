import React, { useState } from "react";
import PropTypes from "prop-types";

// Probably should not be using any here... but I haven't
// figured out how to specify that onSubmit doesn't return antyhing
function GeneratorForm({ onSubmit }: { onSubmit: any }) {
  const [paragraphCount, setParagraphCount] = useState("3");

  return (
    <div className="w-form">
      <h3 className="small-header bigger">Generate Your Ipsum</h3>
      <div id="email-form" className="form">
        <div className="field-group">
          <div className="field-container">
            <label htmlFor="paragraphs" className="field-label">
              Paragraphs
            </label>
            <input
              type="number"
              className="input-field w-input"
              maxLength={256}
              value={paragraphCount}
              onChange={e => setParagraphCount(e.target.value)}
              name="paragraphs"
              data-name="paragraphs"
              id="paragraphs"
              required
            />
          </div>
        </div>
        <div className="button-group">
          <button
            className="button w-button"
            onClick={() => onSubmit(paragraphCount)}
          >
            Generate Ipsum
          </button>
        </div>
      </div>
    </div>
  );
}

GeneratorForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default GeneratorForm;
