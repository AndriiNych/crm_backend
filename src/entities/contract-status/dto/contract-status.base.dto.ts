import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ContractStatusBaseDto {
  @ApiProperty({ description: 'The unique identifier for the contract status' })
  @Expose()
  id: number;

  @ApiProperty({ description: 'The name of the contract status' })
  @Expose()
  contractStatusName: string;

  @ApiProperty({ description: 'The sort order for the contract status' })
  @Expose()
  sort: number;

  @ApiProperty({ description: 'Flag indicating if the contract status is deleted' })
  @Expose()
  isDeleted: boolean;

  @ApiProperty({ description: 'The date and time when the contract status was created' })
  @Expose()
  createdAt: Date;
}
