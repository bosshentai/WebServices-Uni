import { Pool } from 'pg';
import { pool } from '../config/database';
import { Sequelize } from "sequelize";


// const {} = pool;

export const connection =  new Sequelize(pool);

// export const connection = new Sequelize('postgres://postgres:postgres@localhost:1235/tp01')


// export const connection = new Sequelize()
