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

  /**
   * Returns groupings of quotes by author
   * @param {number} numberGroups - number of groups to be returned.
   * @returns {Array[Array<Quote>]}
   */
  public static getGroup(numberGroups: number): Quote[][] {
    let quoteIndex = 0;
    const quoteGroupList: Quote[][] = new Array(numberGroups).fill([]);
    for (let i = 0; i < numberGroups; i++) {
      const randomLen: number = 2 + Math.round(Math.random() * 2);
      quoteGroupList[i] = new Array(randomLen);
      for (let j = 0; j < randomLen; j++) {
        quoteGroupList[i][j] = this.quotes[quoteIndex];
        if (this.quotes.length > quoteIndex + 1) {
          quoteIndex++;
        } else {
          quoteIndex = 0;
        }
      }
    }
    return quoteGroupList;
  }
}

export default Quotes;
