import passport from 'passport';
import dotenv from 'dotenv';
import { getRepository } from 'typeorm';
import Account from '../entities/Account';
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
dotenv.config();

passport.serializeUser((user, done) => {
     done(null, user);
  });
  
passport.deserializeUser(async (id: any, done) => {
  const accountRepository = getRepository(Account);  
  accountRepository.findOne(id)
    .then(user => {
      user ? 
      done(null, user):
      done(null, false)
    })
  });

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    callbackURL: `http://${process.env.DOMAIN}:${process.env.PORT}/auth/google/callback`,
    passReqToCallback   : true
  },
  (request: any, accessToken: any, refreshToken: any, profile: any, done: any) => {
    // User.findOrCreate({ googleId: profile.id }, function (err: any, user: any) {
    //   return done(err, user);
    // });
    return done(null, profile);
  }
));