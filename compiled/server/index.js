"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (request, response) {
    response.send("env");
});
var server = function () {
    app.listen(process.env.PORT, function () { return console.log("Running on port " + process.env.PORT); });
};
exports.server = server;
//# sourceMappingURL=index.js.map