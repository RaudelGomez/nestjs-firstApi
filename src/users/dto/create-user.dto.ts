import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, MinLength } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  "email": string;

  @IsString()
  "name": string;

  @IsString()
  "password": string
}
