const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require("../config/keys");

let User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google_client_ID,
      clientSecret: keys.google_client_secret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      new User({ googleId : profile.id, displayName : profile.displayName, emails : profile.emails }).save()
    }
  )
)
