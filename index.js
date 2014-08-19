var passportLocal = require("passport-local");
var request = require("request");
var memjs = require("memjs");
var cache = memjs.Client.create();

var strategy = new passportLocal.Strategy(function(username, password, done) {
    var url = 'https://abakus.no/api/' + process.env.ABAKUS_TOKEN + '/user/check/';
    var data = {
        'form': {
            'username': username,
            'password': password
        }
    };

    request.post(url, data, function(error, response, body) {
        if (error) {
            done(null, false);
        } else {
            var user = JSON.parse(body).user;
            if (user && user.auth) {
                user.username = username;
                done(null, user);
            } else {
                done(null, false);
            }
        }
    });
});

var serializeUser = function(user, done) {
    cache.set(user.username, JSON.stringify(user));
    done(null, user.username);
};

var deserializeUser = function(username, done) {
    cache.get(username, function(err, value, key) {
        var user = JSON.parse(value);
        done(null, user);
    });
};



module.exports = {
    'abakusStrategy': strategy,
    'serializeAbakusUser': serializeUser,
    'deserializeAbakusUser': deserializeUser
};