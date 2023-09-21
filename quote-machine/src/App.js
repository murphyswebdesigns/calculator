import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [quoteInfo, setQuoteInfo] = useState({});

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author
        })
      })
  };

  return (

    <body id='quote-box'>
      <div className='quote-text'>
        <i className="fa fa-quote-left"> 
        </i>
        <span id='text'>{quoteInfo.text}</span>
      </div>
      <div className='quote-author'>
        <span id="author">- {quoteInfo.author}</span>
      </div>
      <div className='buttons'>
        <a className="button" id="tweet-quote" title="Tweet this quote!" target="_top" href="https://twitter.com/intent/tweet" >
          <i class="fa-brands fa-twitter">Tweet</i>
        </a>
        
        <button className="button" id="new-quote" onClick={getQuote}>New quote</button>
      </div>
    </body>
  );
}

export default App;
