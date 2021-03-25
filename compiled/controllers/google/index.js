"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.google_loggedout = exports.google_logout = exports.google_success = exports.google_failed = exports.google_callback = exports.google = void 0;
var passport_1 = __importDefault(require("passport"));
exports.google = passport_1.default.authenticate('google', {
    scope: ['email', 'profile']
});
exports.google_callback = passport_1.default.authenticate('google', {
    successRedirect: '/auth/google/success',
    failureRedirect: '/auth/google/failure'
});
var google_failed = function (req, res) {
    res.send("You failed");
};
exports.google_failed = google_failed;
var google_success = function (req, res) {
    res.send("Welcome " + req.user.displayName);
};
exports.google_success = google_success;
var google_logout = function (req, res) {
    req.session = null;
    req.logout();
    req.redirect('/loggedout');
};
exports.google_logout = google_logout;
var google_loggedout = function (req, res) {
    res.send('You are not logged in');
};
exports.google_loggedout = google_loggedout;
//# sourceMappingURL=index.js.map