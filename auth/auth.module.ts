import { Module, Global } from '@nestjs/common';
import { AuthService } from './auth.service';

import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { UsersModule } from '../blood_module/users/users.module';
// import { UsersService } from '../../blood_module/users/users.service';

@Global()
@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }
