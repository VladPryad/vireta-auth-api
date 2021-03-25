"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var express_1 = __importDefault(require("express"));
var google_1 = __importDefault(require("../routes/google"));
var passport_1 = __importDefault(require("passport"));
var cors_1 = __importDefault(require("cors"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var morgan_1 = __importDefault(require("morgan"));
require("../passport/passport-setup");
express_1.default.urlencoded({ extended: false });
express_1.default.json();
var app = express_1.default();
app.use(morgan_1.default('combined'));
app.use(cookie_session_1.default({
    name: "vireta-session",
    keys: ["key1", "key2"]
}));
app.use(cors_1.default());
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use('/', google_1.default);
app.get('/', function (request, response) {
    response.send("Main page");
});
var server = function () {
    app.listen(process.env.PORT, function () { return console.log("Running on http://" + process.env.DOMAIN + ":" + process.env.PORT); });
};
exports.server = server;
//# sourceMappingURL=index.js.map