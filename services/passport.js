const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');

//tell passport library how to use googleStrategy inside application for authentication
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      //User.findOrCreate({ googleId: profile.id })
      //done(null, profile)
      new User({ googleId: profile.id }).save();
      console.log('access token:', accessToken);
      console.log('refresh token:', refreshToken);
      console.log('profile:', profile);
    }
  )
);
