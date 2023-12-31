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
import { Address } from '~/shared/database/typeorm/mapping/address.mapping';
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
  dob: string;

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
  addresses?: Address[];
}
