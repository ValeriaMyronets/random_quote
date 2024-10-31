export const fetchQuote = async () => {
  const response = await fetch('https://api.quotable.io/random');
  
  if (!response.ok) {
    throw new Error('Помилка при завантаженні цитати');
  }
  return response.json();
};
