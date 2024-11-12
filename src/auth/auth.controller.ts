import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    // Starts Google OAuth2 login flow
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(
    @Req() req: Request & { user: any },
    @Res() res: Response,
  ) {
    const user = req.user;
    // Redirect or respond after successful authentication
    // Send user data to the frontend (Chrome extension)
    res.redirect(`chrome-extension://your-extension-id?user=${JSON.stringify(user)}`);
  }
}
