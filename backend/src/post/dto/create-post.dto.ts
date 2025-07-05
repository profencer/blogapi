import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsDate, IsOptional, IsEnum, IsUUID } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsOptional()
  title?: string;

  @ApiProperty()
  @IsOptional()
  content?: string;

  @ApiProperty()
  @IsOptional()
  published?: boolean;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  authorId?: string;
}
