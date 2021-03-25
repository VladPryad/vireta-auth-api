"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var dotenv_1 = __importDefault(require("dotenv"));
var log4js_1 = __importDefault(require("log4js"));
var logger = log4js_1.default.getLogger();
logger.level = process.env.LOG_LEVEL;
logger.info('log4js log info');
logger.debug('log4js log debug');
logger.error('log4js log error');
dotenv_1.default.config();
server_1.server();
//# sourceMappingURL=app.js.map