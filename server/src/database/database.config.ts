import { SequelizeModuleOptions } from '@nestjs/sequelize';
import * as dotenv from 'dotenv';
dotenv.config();
export const databaseConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  uri: process.env.DB_URI || 'none',
  models: [__dirname + '/../models/*.model.ts'],
  autoLoadModels: true,
  synchronize: false, 
  logging: false,
  define: {
    timestamps: false,
  },
};