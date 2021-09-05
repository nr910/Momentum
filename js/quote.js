//? 6.0 Quotes (10:14)


const quotes=[
    {quote: "The whole point of being alive is to evolve into the complete person you were intended to be.",    
    author: "Oprah Winfrey"
    },
    {quote: "There is only one success - to be able to spend your life in your own way.",
    author: "Christopher Morley"
    },
    {quote: "Hope sees the invisible, feels the intangible, and achieves the impossible.",
    author: "Helen Keller"
    },
    {quote: "There is no security on this earth, there is only opportunity.",
    author: "General Douglas MacArthur"
    },
    {quote: "If you can concentrate always on the present, you'll be a happy man.",
    author: "Paulo Cuelho"
    },
    {quote: "Time is the most valuable thing a man can spend.",
    author: "Theophrastus"
    },
    {quote: "Happiness lies in the joy of achievement and the thrill of creative effort.",
    author: "Franklin D. Roosevelt"
    },
    {quote: "If you want the present to be different from the past, study the past.",
    author: "Baruch Spinoza"
    },
    {quote: "You need chaos in your soul to give birth to a dancing star.",
    author: "Friedrich Nietzsche"
    },
    {quote: "Well begun is half done.",
    author: "Aristotle"
    }
    ];
    
    const quote=document.querySelector("#quote span:first-child");
    const author=document.querySelector("#quote span:last-child");
    const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];
    
    quote.innerText=todaysQuote.quote;
    author.innerText=todaysQuote.author;