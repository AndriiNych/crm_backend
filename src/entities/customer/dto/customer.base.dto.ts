import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CustomerBaseDto {
  @ApiProperty({ description: 'The unique identifier of the customer' })
  @Expose()
  id: number;

  @ApiProperty({ description: 'The ID of the associated client' })
  @Expose()
  clientId: number;

  @ApiProperty({ description: 'The name of the customer' })
  @Expose()
  customerName: string;

  @ApiProperty({ description: 'The phone number of the customer' })
  @Expose()
  customerPhone: string;

  @ApiProperty({ description: 'The ID of the customer type' })
  @Expose()
  customerTypeId: number;

  @ApiProperty({ description: 'Flag indicating if the customer is deleted' })
  @Expose()
  isDeleted: boolean;

  @ApiProperty({ description: 'The date and time when the customer was created' })
  @Expose()
  createdId: Date;

  @ApiProperty({ description: 'The date and time when the customer was last updated' })
  @Expose()
  updatedAt: Date;
}
