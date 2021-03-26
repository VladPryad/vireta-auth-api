"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
var dotenv_1 = __importDefault(require("dotenv"));
var typeorm_1 = require("typeorm");
var Account_1 = __importDefault(require("../entities/Account"));
var GoogleStrategy = require('passport-google-oauth2').Strategy;
dotenv_1.default.config();
passport_1.default.serializeUser(function (user, done) {
    done(null, user);
});
passport_1.default.deserializeUser(function (id, done) {
    var accountRepository = typeorm_1.getRepository(Account_1.default);
    accountRepository.findOne(id)
        .then(function (user) {
        done(null, user);
    });
});
passport_1.default.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://" + process.env.DOMAIN + ":" + process.env.PORT + "/auth/google/callback",
    passReqToCallback: true
}, function (request, accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err: any, user: any) {
    //   return done(err, user);
    // });
    console.log("Profile: " + profile);
    return done(null, profile);
}));
//# sourceMappingURL=passport-setup.js.map