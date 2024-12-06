import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ClientContractBaseDto {
  @ApiProperty({ description: 'The unique identifier for the client contract record' })
  @Expose()
  id: number;

  @ApiProperty({ description: 'The unique identifier for the client' })
  @Expose()
  clientId: number;

  @ApiProperty({ description: 'The unique identifier for the contract' })
  @Expose()
  contractId: number;

  @ApiProperty({ description: 'The date when the client contract was created' })
  @Expose()
  clientContractDate: Date;

  @ApiProperty({ description: 'Notes related to the client contract' })
  @Expose()
  clientContractNotes: string;

  @ApiProperty({ description: 'The start date of the client contract' })
  @Expose()
  clientContractStart: Date;

  @ApiProperty({ description: 'The end date of the client contract' })
  @Expose()
  clientContractEnd: Date;

  @ApiProperty({ description: 'The priority level of the client contract' })
  @Expose()
  clientContractPriority: number;

  @ApiProperty({ description: 'The status identifier of the contract' })
  @Expose()
  contractStatusId: number;

  @ApiProperty({ description: 'Indicates if the client contract is deleted' })
  @Expose()
  isDeleted: boolean;

  @ApiProperty({ description: 'The date when the client contract was created' })
  @Expose()
  createdAt: Date;

  @ApiProperty({ description: 'The date when the client contract was last updated' })
  @Expose()
  updatedAt: Date;
}
