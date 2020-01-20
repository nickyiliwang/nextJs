import allQuotes from "../../util/quotes.json";

// Level 1 with hard coded
// export default (req, res) => {
//   res.status(200).json({
//     quote: "Write tests, not too many, mostly integration",
//     author: "Guillermo Rauch"
//   });
// };

// Level 2 with JSON file
// export default (req, res) => {
//   const quote = quotes[Math.floor(Math.random() * quotes.length)];
//   res.status(200).json(quote);
// };

// Level 3 having a search function
// utilizing built in middlewares
export default (req, res) => {
  const { author } = req.query;
  let quotes = allQuotes;

  if (author) {
    quotes = quotes.filter(quote =>
      quote.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (!quotes.length) {
    quotes = allQuotes.filter(
      quote => quote.author.toLowerCase() === "unknown"
    );
  }

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).json(quote);
};
