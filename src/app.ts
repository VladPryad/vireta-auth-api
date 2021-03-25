import { server } from './server';
import dotenv from 'dotenv';
import log4js from 'log4js';

const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL!;
logger.info('log4js log info');
logger.debug('log4js log debug');
logger.error('log4js log error');

dotenv.config();

server();