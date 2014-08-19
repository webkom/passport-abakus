# passport-abakus

```bash
npm install git+https://github.com/webkom/passport-abakus.git
```

passport-abakus is a passport strategy that can be used to to authenticate users 
against the API of abakus.no. If you would like to use it you need a API token.
Contact webkom@abakus.no to request one.

## Usage
This module is based on passport-local. The setup should be
fairly the same except it is not necessary to write the strategy.

```javascript
var passport = require("passport");
var passportAbakus = require("passport-abakus");

passport.use(passportAbakus.nerdStrategy);
passport.serializeUser(passportAbakus.serializeNerdUser);
passport.deserializeUser(passportAbakus.deserializeNerdUser);

app.use(passport.initialize());
```

In addition to add the strategy in your app. You must make sure that the
API token is stored in a environment variable called `NERD_TOKEN`

## Contribute
Open an issue or a pull-request with your fix or awesome new feature.
Make sure to check those that are already open, to avoid duplicates.

--------
MIT © webkom, Abakus Linjeforening
