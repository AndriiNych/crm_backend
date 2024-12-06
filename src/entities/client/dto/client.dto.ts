import { ApiExtraModels, OmitType } from '@nestjs/swagger';
import { ClientBaseDto } from './client.base.dto';
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { FIELDS_LENGTH } from '@src/db/fields-type';

@ApiExtraModels(ClientBaseDto)
export class ClientDto extends OmitType(ClientBaseDto, [
  'id',
  'createdAt',
  'updatedAt',
]) {
  @IsString()
  @Length(FIELDS_LENGTH.NAME)
  @IsNotEmpty()
  clientName: string;
}
