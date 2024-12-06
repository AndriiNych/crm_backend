import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ContractPlaBasenDto {
  @ApiProperty({ description: 'The unique identifier for the contract plan' })
  @Expose()
  id: number;

  @ApiProperty({ description: 'The unique identifier for the associated contract' })
  @Expose()
  contractId: number;

  @ApiProperty({ description: 'The start date of the contract plan' })
  @Expose()
  contractStart: Date;

  @ApiProperty({ description: 'The end date of the contract plan' })
  @Expose()
  contractEnd: Date;

  @ApiProperty({ description: 'The total duration of the contract in days' })
  @Expose()
  contractTime: number;

  @ApiProperty({ description: 'The date and time when the contract plan was created' })
  @Expose()
  createdAt: Date;

  @ApiProperty({ description: 'The date and time when the contract plan was last updated' })
  @Expose()
  updatedAt: Date;
}
