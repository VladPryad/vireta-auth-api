"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoggedIn = void 0;
var isLoggedIn = function (req, res, next) {
    if (req.user) {
        next();
    }
    else {
        res.sendStatus(401);
    }
};
exports.isLoggedIn = isLoggedIn;
//# sourceMappingURL=isloggedin.js.map