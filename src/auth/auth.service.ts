import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OAuth2Client } from 'google-auth-library';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  private readonly client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async validateUser(idToken: string) {
    try {
      const ticket = await this.client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.getPayload();

      // Extract user information
      const { sub: googleId, email, name, picture } = payload;

      // Find or create user
      let user = await this.usersRepository.findOne({ where: { googleId } });
      if (!user) {
        user = this.usersRepository.create({
          googleId,
          email,
          name,
          profilePicture: picture,
        });
        await this.usersRepository.save(user);
      } else {
        // Update user information if needed
        user.name = name;
        user.profilePicture = picture;
        await this.usersRepository.save(user);
      }

      return {
        id: user.id,
        googleId: user.googleId,
        email: user.email,
        name: user.name,
        profilePicture: user.profilePicture,
      };
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
