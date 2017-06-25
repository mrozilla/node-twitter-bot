// ================================================================================
// Import
// ================================================================================

var content = require('./content.js');

// ================================================================================
// Console Bot
// ================================================================================

(function testMessages() {
  function sample(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  var tweet = sample(content.beginnings) + " " + sample(content.helperVerbs) + " " + sample(content.adverbs) + " " + sample(content.verbs) + " " + sample(content.prepositions) + " " + sample(content.nouns) + " " + sample(content.endings) + ".";
  if (tweet.length < 140) {
    console.log(tweet);
  } else {
    console.error("TOO LONG");
  }
  setTimeout(testMessages, 100);
})();