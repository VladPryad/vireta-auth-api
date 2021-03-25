"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var GoogleStrategy = require('passport-google-oauth2').Strategy;
passport_1.default.serializeUser(function (user, done) {
    // done(null, user.id);
    done(null, user);
});
passport_1.default.deserializeUser(function (id, done) {
    // User.findById(id, function(err, user) {
    //   done(err, user);
    // });
    done(null, id);
});
passport_1.default.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://" + process.env.DOMAIN + ":" + process.env.PORT + "/auth/google/callback",
    passReqToCallback: true
}, function (accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err: any, user: any) {
    //   return done(err, user);
    // });
    return done(null, profile);
}));
//# sourceMappingURL=passport-setup.js.map