interface Quote {
  author: string;
  quote: string;
}

class Quotes {
  /**
   * Returns collection of quotes
   *
   * @returns {Quotes[]}
   */
  static quotes: Quote[] = [
    {
      author: "Steve Jobs",
      quote:
        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it"
    },
    {
      author: "Walt Disney",
      quote:
        "We keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths."
    }
  ];

  /**
   * Returns the all quotes
   *
   * @returns {Array<Quote>}
   */
  public static getAll(): Quote[] {
    return this.quotes;
  }

  /**
   * Returns a random single quote from the quotes data set
   *
   * @returns {Quote}
   */
  public static getRandom(): Quote {
    const randomIndex: number = Math.floor(Math.random() * this.quotes.length);

    return this.quotes[randomIndex];
  }
}

export default Quotes;
