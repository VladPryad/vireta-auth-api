import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();
 
const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT!),
  username: process.env.POSTGRES_USER!,
  password: process.env.POSTGRES_PASSWORD!,
  database: process.env.POSTGRES_DB!,
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
 
export default ormconfig;