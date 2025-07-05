import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsDate, IsOptional, IsEnum, IsUUID } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsOptional()
  name?: string;

  @ApiProperty({ enum: ['UserRole'] })
  @IsOptional()
  @IsEnum(['UserRole'])
  role?: 'UserRole';
}
