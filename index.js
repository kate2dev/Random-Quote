const quotes = ["I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. -Les ben",
       "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover. - Resa Parks",
       "It is better to be hated for what you are than to be loved for what you are not. - Rich Moore",
       "I am so clever that sometimes I don't understand a single word of what I am saying. - Kate Emoefe",
       "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Tega Emoefe",
       "Without music, life would be a mistake. - Precious Emoefe",
       "Always forgive your enemies; nothing annoys them so much. - Diana Ben", 
       "A friend is someone who knows all about you and still loves you - Mena Emoefe", 
       "In three words I can sum up everything I've learned about life: it goes on - Nora Bill",
       "Be the change that you wish to see in the world - Rita John"];

       const quoteButton = document.getElementById('quote-button');
       const fristQuote = document.getElementById('quote');

       quoteButton.addEventListener('click', () => {
        const randomQuote = Math.floor(Math.random() * quotes.length);
        fristQuote.textContent = quotes[randomQuote];

       })

