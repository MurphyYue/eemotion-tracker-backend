import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { OAuthStrategy } from 'passport-google-oauth20';

// Add your clientID and clientSecret here
const googleOAuthConfig = {
  clientID: 'YOUR_CLIENT_ID', // {{ edit_1 }}
  clientSecret: 'YOUR_CLIENT_SECRET', // {{ edit_2 }}
};

@Module({
  providers: [
    AuthService,
    new OAuthStrategy(googleOAuthConfig, async (accessToken, refreshToken, profile, done) => {
      // Handle user profile here
      done(null, profile);
    }), // {{ edit_3 }}
  ],
  controllers: [AuthController]
})
export class AuthModule {}
