# Weather Gitesoft
Weather SPA Using PHP and VueJS (using metaweather.com API)

# Features
- Really easy to install and implement
- This app has three main section
  * Home page : Displays a list of 6 chosen cities weather of today
  * `/weather/{woeid}` : Displays the weather forecast for a specific city (Where On Earth ID, [Docs](http://developer.yahoo.com/geo/geoplanet/guide/concepts.html))
  * `/search/{keyword}` : Displays the weather of today for the desired city keyword (if it exists)
# Installation:
1. Clone this repo : `git clone git@github.com:rsm23/vuejs-metaweather-api.git`
2. `cd vuejs-metaweather-api && yarn install` or `npm install`
3. Run `yarn run dev` or (`yarn run production` if you want to deploy the app)
4. Open the app : `http://your-domain.test/app/folder`

# License
This app is licensed under the [MIT License](LICENSE.md)