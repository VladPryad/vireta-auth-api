"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.google_success = exports.google_failed = exports.google_callback = exports.google = void 0;
var passport_1 = __importDefault(require("passport"));
var google = function (req, res) {
    passport_1.default.authenticate('google', { scope: ['email', 'profile'] });
};
exports.google = google;
var google_callback = function (req, res) {
    passport_1.default.authenticate('google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
    });
};
exports.google_callback = google_callback;
var google_failed = function (req, res) {
    res.send("You failed");
};
exports.google_failed = google_failed;
var google_success = function (req, res) {
    res.send("Welcome " + req.user.email);
};
exports.google_success = google_success;
//# sourceMappingURL=index.js.map