
const rp = require('request-promise');
const cheerio = require('cheerio');
const url = "https://www.coindesk.com/price/bitcoin";

rp(url)
  .then(function(html) {
    console.log("price of bitcoin:");
    console.log(cheerio('.price-large', html).text());
  })

  setInterval(function(){

    rp(url)
  .then(function(html) {
    console.log("price of bitcoin:");
    console.log(cheerio('.price-large', html).text());
  })
  .catch(function(err) {
  });
  
  },5000)