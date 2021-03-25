import passport from 'passport';

export const google = (req: any, res: any) => { 
passport.authenticate('google', { scope:
    [ 'email', 'profile' ] }
)};

export const google_callback = (req: any, res: any) => {
  passport.authenticate( 'google', {
      successRedirect: '/auth/google/success',
      failureRedirect: '/auth/google/failure'
})};

export const google_failed = (req: any, res: any) => {
    res.send("You failed");
};

export const google_success = (req: any, res: any) => {
    res.send(`Welcome ${req.user.email}`);
};