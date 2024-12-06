import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CustomerTypeBaseDto {
  @ApiProperty({ description: 'The unique identifier of the customer type' })
  @Expose()
  id: number;

  @ApiProperty({ description: 'The name of the customer type' })
  @Expose()
  customerTypeName: string;

  @ApiProperty({ description: 'Notes associated with the customer type' })
  @Expose()
  customerTypeNotes: string;

  @ApiProperty({ description: 'The priority level of the customer type' })
  @Expose()
  customerTypePriority: number;

  @ApiProperty({ description: 'Flag indicating if the customer type is deleted' })
  @Expose()
  isDeleted: boolean;

  @ApiProperty({ description: 'The date and time when the customer type was created' })
  @Expose()
  createdAt: Date;
}
