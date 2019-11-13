import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ExtractJwt, Strategy, } from 'passport-jwt';
import { PassportStrategy, } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { parse } from 'url';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {

    super({
      jwtFromRequest: ExtractJwt.fromExtractors([ExtractJwt.fromAuthHeaderAsBearerToken(),
      ExtractJwt.fromBodyField('access_token'), ExtractJwt.fromUrlQueryParameter('access_token')]),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, username: payload.username }
  }
}