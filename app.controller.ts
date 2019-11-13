import { Controller, Get, Req, Post, UseGuards, Body, UseInterceptors, UploadedFile, UploadedFiles, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
// import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
// import { editFileName, imageFileFilter } from './utils/file-uploading.utils';
// import * as fs from 'fs';
// import { Response } from 'express-serve-static-core';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly authService: AuthService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() request: Request) {
    return this.authService.login(request.user);
  }
}
