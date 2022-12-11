import {
  IsString,
  IsNumber,
  //IsEmail,
  IsNotEmpty,
  IsUrl,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @IsNumber()
  readonly id: number;

  @IsNotEmpty()
  @IsNumber()
  readonly userProfilesid: number;

  @IsNotEmpty()
  @IsNumber()
  readonly thirdPartiesid: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'login/username to sign in',
  })
  readonly login: string;

  // @IsNotEmpty()
  // @IsEmail()
  // readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsUrl()
  readonly imageUrl: string;
}
