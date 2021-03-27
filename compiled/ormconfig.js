"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var ormconfig = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [
        './compiled/src/entities/**/*.js'
    ],
    migrations: [
        './compiled/src/migrations/**/*.js'
    ],
    cli: {
        "entitiesDir": "./src/entities",
        "migrationsDir": "./src/migrations"
    },
    synchronize: true,
    logging: false
};
exports.default = ormconfig;
//# sourceMappingURL=ormconfig.js.map