import passport from 'passport';
import dotenv from 'dotenv';
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
dotenv.config();

passport.serializeUser((user, done) => {
    // done(null, user.id);
    done(null, user);
  });
  
passport.deserializeUser((id: any, done) => {
    // User.findById(id, function(err, user) {
    //   done(err, user);
    // });
    done(null, id);
  });

passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    callbackURL: `http://${process.env.DOMAIN}:${process.env.PORT}/auth/google/callback`,
    passReqToCallback   : true
  },
  (accessToken: any, refreshToken: any, profile: any, done: any) => {
    // User.findOrCreate({ googleId: profile.id }, function (err: any, user: any) {
    //   return done(err, user);
    // });
    return done(null, profile);
  }
));