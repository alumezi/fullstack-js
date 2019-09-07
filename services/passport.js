const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose');
const keys = require("../config/keys");

let User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google_client_ID,
      clientSecret: keys.google_client_secret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          done(null, existingUser)
        } else {
          new User({ googleId: profile.id, displayName: profile.displayName, emails: profile.emails, date: new Date() })
            .save()
            .then(user => done(null, user))
        }
      })
    }
  )
)
