import passport from 'passport';

export const google =  
    passport.authenticate('google', { 
        scope: [ 'email', 'profile' ] }
    );

export const google_callback = 
  passport.authenticate( 'google', {
      successRedirect: '/auth/google/success',
      failureRedirect: '/auth/google/failure'
    });

export const google_failed = (req: any, res: any) => {
    res.send("You failed");
};

export const google_success = (req: any, res: any) => {
    res.send(`Welcome ${req.user.displayName}`);
};

export const google_logout = (req: any, res: any) => {
    req.session = null;
    req.logout();
    req.redirect('/loggedout');
}

export const google_loggedout = (req: any, res: any) => {
    res.send('You are not logged in');
}