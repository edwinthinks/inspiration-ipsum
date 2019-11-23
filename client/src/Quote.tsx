import React from "react";

interface QuoteProps {
  author: string;
  quote: string;
  onMouseEnter: any;
  onMouseLeave: any;
}

function Quote({ author, quote, onMouseEnter, onMouseLeave }: QuoteProps) {
  return (
    <>
      <span
        className="quote"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {quote + " "}
      </span>
    </>
  );
}

export default Quote;
