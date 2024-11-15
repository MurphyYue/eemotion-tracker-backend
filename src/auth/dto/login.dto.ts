import { IsString } from "class-validator";

export class LoginDto {
  @IsString()
  id_token: string;
}