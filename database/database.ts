import { TypeOrmModuleOptions } from "@nestjs/typeorm";
const database_blood: TypeOrmModuleOptions =
{
  "name": "blood",
  "type": "mysql",
  "host": "localhost",
  "port": 3308,
  "username": "root",
  "password": "root",
  "database": "blood",
  "entities": [
    "dist/blood_module/**/**.entity{.ts,.js}"
  ],
  "synchronize": true
}

const database_betta: TypeOrmModuleOptions =
{
  "name": "betta",
  "type": "mysql",
  "host": "localhost",
  "port": 3308,
  "username": "root",
  "password": "root",
  "database": "betta",
  "entities": [
    "dist/betta_module/**/**.entity{.ts,.js}"
  ],
  "synchronize": true
}
export { database_blood, database_betta }

