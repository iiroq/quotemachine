
import React from 'react';
import './App.css';
import data from './quotes.json';
//var ReactCSSTransitionGroup = require('react-transition-group'); // ES5 with npm
//const $ = window.$;
import {AnimateOnChange} from 'react-animation';

/*
function getQuotes() {
  return $.getJSON('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', function(data) {
    // JSON result in `data` variable
    if (typeof data ==='string') {
      const quoteData = JSON.parse(data);
      //console.log(quoteData)
    } 
});
}
*/

const quotes = data.quotes;
//console.log(quotes.length)
const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: this.randomQuote(quotes).quote,
      author: this.randomQuote(quotes).author,
      opacity: 0
    }
    this.randomQuote = this.randomQuote.bind(this);
    this.click = this.click.bind(this);
  }
  
  randomQuote(quotes) {
    let rand = Math.floor(Math.random() * quotes.length)
    return quotes[rand];
  }

  click() {
    let randQuote = this.randomQuote(quotes);
    this.setState({
      quote: randQuote.quote,
      author: randQuote.author,
      opacity: 1
    })

  }

  render() {
    let color = colors[Math.floor(Math.random() * colors.length)];
    let inputStyle = {
      backgroundColor: color,
      transition: "all .5s ease",
      WebkitTransition: "all .5s ease",
      MozTransition: "all .5s ease",
      color: 'white'
    };
    let textColor = {
      color: color
    };
    //let opacity = this.state.opacity===1 ? 'out' : 'in'
    
    return (
      <div style={inputStyle} id="wrapper">
        <div id="quote-box" className="grid-container">
          <div style={textColor} id="text">
            <AnimateOnChange>
            <p><i class="fa fa-quote-left" aria-hidden="true"></i> {this.state.quote}</p>
            </AnimateOnChange>
          </div>
          
          <div style={textColor} id="author">
            <AnimateOnChange>{this.state.author}</AnimateOnChange>
          </div>
          
          <div id="tweet-buttons">
            <a id="tweet-quote" title="Tweet this quote" target="_blank" href="twitter.com/intent/tweet"><i style={textColor} className="fa fa-twitter-square" aria-hidden="true"></i> </a>  
          </div>
  
          <div id="new-button">
          <button style={inputStyle} onClick={this.click} id="new-quote" type="button" className="btn">New Quote</button>
          </div>
  
  
        </div>
  
      
      </div>
      
    );

  }
}


export default App;
