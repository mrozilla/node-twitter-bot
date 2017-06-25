# node-twitter-bot
A proof-of-concept of a Twitter bot in Node.js with Heroku.
## Description
This bot generates sentences from lists of sentence chunks (defined in content.js) and automatically tweets them in a predefined interval.
## Local development
1. Make sure you have `node` and `npm` [installed](https://gist.github.com/mrozilla/12318abcf32c9ca359ca39b48c5d560c), clone the repo and run 
  
    ```
    npm install
    ```
  
2. To see a preview of the messages to be tweeted, run
  
    ```
    npm test
    ```

## Production deployment  
1. [Sign up](https://twitter.com/signup) for a new Twitter account.
2. Go to [apps.twitter.com/app/new](apps.twitter.com/app/new) and create a new app. Click on `manage keys and access tokens` and write down the values for the following:
  
    ```
    Consumer Key (API Key)
    Consumer Secret (API Secret)

    Access Token
    Access Token Secret
    ```

3. [Create your Heroku app](https://devcenter.heroku.com/articles/creating-apps), [set up the app deployment](https://devcenter.heroku.com/categories/deployment), and deploy.
4. [Open your Heroku app](https://dashboard.heroku.com/apps/) and click on `Configure Add-ons`.
5. Search for `Heroku Scheduler` and install it, go back to your app and open the `Heroku Scheduler`.
6. In the `$` field of the scheduler, write `node bot.js` and set up an hourly frequency.
7. Make sure the web dyno is turned off (the app gets awoken by the scheduler).
7. The bot is now tweeting every hour!


