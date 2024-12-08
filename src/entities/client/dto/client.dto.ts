import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  MaxLength,
} from 'class-validator';
import { FIELDS_LENGTH } from '@src/db/fields-type';

// @ApiExtraModels(ClientBaseDto)
export class ClientDto {
  @ApiProperty({ description: 'Parent client ID' })
  @IsInt()
  clientParentId: number;

  @ApiProperty({ description: 'Name of the client' })
  @IsString()
  @MaxLength(FIELDS_LENGTH.NAME)
  @IsNotEmpty()
  clientName: string;

  @ApiProperty({ description: 'Notes about the client', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(FIELDS_LENGTH.NAME)
  clientNotes?: string;

  @ApiProperty({ description: 'Client phone number', required: false })
  @IsOptional()
  @Matches(/^\d+$/, {
    message: 'Phone must be a decimal number',
  })
  @IsString()
  @Length(FIELDS_LENGTH.PHONE)
  clientPhone?: string;

  @ApiProperty({ description: 'Client address', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(FIELDS_LENGTH.NAME)
  clientAdress: string;

  @ApiProperty({ description: 'Client email', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(FIELDS_LENGTH.NAME)
  clientEmail: string;

  @ApiProperty({ description: 'Deleted status of the client', required: false })
  @IsOptional()
  @IsBoolean()
  isDeleted: boolean;
}
