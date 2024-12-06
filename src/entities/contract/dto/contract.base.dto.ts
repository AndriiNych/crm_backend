import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ContractBaseDto {
  @ApiProperty({ description: 'The unique identifier for the contract' })
  @Expose()
  id: number;

  @ApiProperty({ description: 'The name of the contract' })
  @Expose()
  contractName: string;

  @ApiProperty({ description: 'Additional notes regarding the contract' })
  @Expose()
  contractNotes: string;

  @ApiProperty({ description: 'The unique identifier for the contract type' })
  @Expose()
  contractTypeId: number;

  @ApiProperty({ description: 'The length of the contract in months' })
  @Expose()
  contractLength: number;

  @ApiProperty({ description: 'The total time allocated for the contract in hours' })
  @Expose()
  contractTime: number;

  @ApiProperty({ description: 'The total amount for the contract in monetary value' })
  @Expose()
  contractAmount: number;

  @ApiProperty({ description: 'Indicates whether the contract is deleted' })
  @Expose()
  isDeleted: boolean;

  @ApiProperty({ description: 'The date and time when the contract was created' })
  @Expose()
  createdAt: Date;

  @ApiProperty({ description: 'The date and time when the contract was last updated' })
  @Expose()
  updatedAt: Date;
}
