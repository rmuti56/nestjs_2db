import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { database_blood } from "../../database/database"
import { Users } from './users.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Users], 'blood')],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
