"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
server_1.server();
//# sourceMappingURL=app.js.map