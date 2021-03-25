import express from 'express';
import googleAuthRouter from '../routes/google';
import passport from 'passport';
import cors from 'cors';
import cookieSession from 'cookie-session';
import morgan from 'morgan';
import '../passport/passport-setup';

express.urlencoded({ extended: false });
express.json();
const app = express();

app.use(morgan('combined'));

app.use(cookieSession({
  name: "vireta-session",
  keys: ["key1", "key2"]
}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', googleAuthRouter);

app.get('/', (request, response) => {
  response.send("Main page");
});

export const server = () => {
  app.listen(process.env.PORT, () => console.log(`Running on http://${process.env.DOMAIN}:${process.env.PORT}`));
};