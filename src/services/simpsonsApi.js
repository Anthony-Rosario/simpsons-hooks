export const getQuote = async () => {
  const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');

  return response.json();
}