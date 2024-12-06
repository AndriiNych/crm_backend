import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ContractTypeBaseDto {
  @ApiProperty({ description: 'The unique identifier for the contract type' })
  @Expose()
  id: number;

  @ApiProperty({ description: 'The name of the contract type' })
  @Expose()
  contractTypeName: string;

  @ApiProperty({ description: 'Additional notes or description for the contract type' })
  @Expose()
  contractTypeNotes: string;

  @ApiProperty({ description: 'Flag indicating if the contract type is deleted' })
  @Expose()
  isDeleted: boolean;

  @ApiProperty({ description: 'The date and time when the contract type was created' })
  @Expose()
  createdAt: Date;
}
