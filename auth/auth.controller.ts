import { Controller, Get, Req, Post, UseGuards, Param, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Request, request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) { }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() request: Request) {
    // console.log(request.body)
    return this.authService.login(request.body);
  }
}


