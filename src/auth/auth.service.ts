import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(profile: any): Promise<User> {
    const { id, displayName, emails } = profile;
    const email = emails[0].value;

    // Find or create the user
    let user = await this.userService.findUserByGoogleId(id);
    if (!user) {
      user = await this.userService.createUser({
        googleId: id,
        email,
        name: displayName,
      });
    }
    return user;
  }
}
