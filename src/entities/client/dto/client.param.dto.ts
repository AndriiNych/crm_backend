import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class ClientParamDto {
  @IsInt()
  @ApiProperty({ description: 'Id client' })
  id: number;
}
