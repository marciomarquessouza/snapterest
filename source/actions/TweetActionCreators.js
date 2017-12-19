//source/action/TweetActionCreators.js

var AppDispatcher = require('../dispatcher/AppDispatcher');

function receiveTweet(tweet) {
    
    console.log('M2');

    var action = {
        type: 'receive_tweet',
        tweet: tweet
    };
    
    AppDispatcher.dispatch(action);
   }

module.exports = {
    receiveTweet: receiveTweet
};
