import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CallBillingBaseDto {
  @ApiProperty({ description: 'The unique identifier for the call billing record' })
  @Expose()
  id: number;

  @ApiProperty({ description: 'The unique identifier for the client' })
  @Expose()
  clientId: number;

  @ApiProperty({ description: 'The unique identifier for the customer' })
  @Expose()
  customerId: number;

  @ApiProperty({ description: 'The unique identifier for the worker who handled the call' })
  @Expose()
  workerId: number;

  @ApiProperty({ description: 'The date when the call billing occurred' })
  @Expose()
  callBillingDate: Date;

  @ApiProperty({ description: 'The length of the call in seconds' })
  @Expose()
  callBillingLength: number;

  @ApiProperty({ description: 'The date when the call billing record was created' })
  @Expose()
  createdIt: Date;
}
