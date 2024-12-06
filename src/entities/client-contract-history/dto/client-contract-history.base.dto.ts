import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ClientContractHistoryBaseDto {
  @ApiProperty({ description: 'The unique identifier for the client contract history record' })
  @Expose()
  id: number;

  @ApiProperty({ description: 'The unique identifier for the client contract' })
  @Expose()
  clientContractId: number;

  @ApiProperty({ description: 'The unique identifier for the contract status' })
  @Expose()
  contractStatusId: number;

  @ApiProperty({ description: 'The date when the client contract was recorded' })
  @Expose()
  clientContractDate: Date;

  @ApiProperty({ description: 'The timestamp when the client contract history record was created' })
  @Expose()
  createdAt: Date;
}
