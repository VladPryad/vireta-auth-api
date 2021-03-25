import express from 'express';
import authRouter from '../routes/google';
import passport from 'passport';
import cors from 'cors';
import cookieSession from 'cookie-session';
import '../passport/passport-setup';

express.urlencoded({ extended: false });
express.json();
const app = express();

app.use(cookieSession({
  name: "vireta-session",
  keys: ["", ""]
}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use('auth', authRouter);

app.get('/', (request, response) => {
  response.send("env");
});

export const server = () => {
  app.listen(process.env.PORT, () => console.log(`Running on http://${process.env.DOMAIN}:${process.env.PORT}`));
};