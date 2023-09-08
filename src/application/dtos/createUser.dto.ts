import {
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';
import { Address } from 'src/domain/entities/address.entity';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(200)
  name: string;

  @ApiProperty()
  @IsDateString({ strict: true })
  @IsNotEmpty()
  dob: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  document: string;

  @ApiProperty()
  @IsOptional()
  address?: Address[];
}
