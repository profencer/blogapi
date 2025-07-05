import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ description: 'User name' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ description: 'User email address' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'User password', minLength: 6 })
  @IsString()
  @MinLength(6)
  password: string;
}
