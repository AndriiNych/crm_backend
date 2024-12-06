import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class ClientContractPlanBaseDto {
  @ApiProperty({ description: 'The unique identifier for the client contract plan' })
  @Expose()
  id: number;

  @ApiProperty({ description: 'The unique identifier for the client' })
  @Expose()
  clientId: number;

  @ApiProperty({ description: 'The unique identifier for the client contract' })
  @Expose()
  clientContractId: number;

  @ApiProperty({ description: 'The start date of the client contract plan' })
  @Expose()
  clientContractPlanStart: Date;

  @ApiProperty({ description: 'The end date of the client contract plan' })
  @Expose()
  clientContractPlanEnd: Date;

  @ApiProperty({ description: 'The length of the client contract plan in months' })
  @Expose()
  clientContractPlanLength: number;

  @ApiProperty({ description: 'The balance amount associated with the client contract plan' })
  @Expose()
  clientContractPlanBalans: number;

  @ApiProperty({ description: 'The priority level of the client contract plan' })
  @Expose()
  clientContractPlanPriority: number;

  @ApiProperty({ description: 'Indicates whether the client contract plan is active' })
  @Expose()
  isActive: boolean;

  @ApiProperty({ description: 'The date and time when the client contract plan was created' })
  @Expose()
  createdId: Date;
}
