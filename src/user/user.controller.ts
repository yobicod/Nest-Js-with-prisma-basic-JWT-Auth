import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { PrismaService } from 'src/prisma/prisma.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @HttpCode(HttpStatus.OK)
  @Get('me')
  getMe(@GetUser() user: User, @GetUser('email') email: String) {
    return user;
  }

  @Patch()
  editUser() {}
}
