import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class AppController {
  @Get()
  getUsers() {
    return { name: 'Sarthak', email: 'sarthak@bitfumes.com' };
  }

  @Post()
  store(@Req() req: Request) {
    return req.body;
  }

  @Patch('/:userId')
  update(@Req() req: Request) {
    return req.body;
  }

  @Get('/:userId')
  getUser(@Param() params: { userId: number }) {
    return params;
  }

  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return params;
  }
}
