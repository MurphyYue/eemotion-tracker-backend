// server/src/auth/auth.controller.ts

import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express'; 

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    try {
      const user = await this.authService.validateUser(loginDto.id_token);
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
    }
  }
}
