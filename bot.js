// ================================================================================
// Import
// ================================================================================

var twit = require("twit");
var content = require('./content.js');

// ================================================================================
// Config access
// ================================================================================

var Twitter = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

// ================================================================================
// Bot
// ================================================================================

// Publish
(function publishTweet() {
  function sample(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  var tweet = sample(content.beginnings) + " " + sample(content.helperVerbs) + " " + sample(content.adverbs) + " " + sample(content.verbs) + " " + sample(content.prepositions) + " " + sample(content.nouns) + " " + sample(content.endings) + ".";
  if (tweet.length < 140) {
    Twitter.post("statuses/update", { status: tweet }, function(err, data, response) {
      if (!err) {
        console.log("PUBLISHED");
      } else {
        console.log(err);
      }
    })
  }
})();