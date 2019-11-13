import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './blood_module/users/users.module';
import { UserBettaModule } from './betta_module/user-betta/user-betta.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { database_blood, database_betta } from "./database/database"
@Module({
  imports: [
    TypeOrmModule.forRoot(database_blood),
    TypeOrmModule.forRoot(database_betta),
    UsersModule, UserBettaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [UsersModule]
})
export class AppModule { }
