import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserBaseDto {
  @ApiProperty({ description: 'The unique identifier of the user' })
  @Expose()
  id: number;

  @ApiProperty({ description: 'The link to the user table' })
  @Expose()
  userTableLink: string;

  @ApiProperty({ description: 'The identifier of the user table link' })
  @Expose()
  userTableLinkId: number;

  @ApiProperty({ description: 'The login name of the user' })
  @Expose()
  userLogin: string;

  @ApiProperty({ description: 'The password of the user (hashed)' })
  @Expose()
  userPassword: string;

  @ApiProperty({ description: 'The salt used for password hashing' })
  @Expose()
  userPasswordSolt: string;

  @ApiProperty({ description: 'The JWT token used for user authentication' })
  @Expose()
  userJwt: string;

  @ApiProperty({ description: 'The nickname of the user' })
  @Expose()
  userNickname: string;

  @ApiProperty({ description: 'Indicates whether the user is deleted' })
  @Expose()
  isDeleted: boolean;

  @ApiProperty({ description: 'The creation timestamp of the user' })
  @Expose()
  createdAt: Date;
}
