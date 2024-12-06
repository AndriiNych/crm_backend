import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class MessageBaseDto {
  @ApiProperty({ description: 'The unique identifier of the message' })
  @Expose()
  id: number;

  @ApiProperty({ description: 'The code associated with the message' })
  @Expose()
  messageCode: string;

  @ApiProperty({ description: 'The status of the message (e.g., "sent", "failed")' })
  @Expose()
  messageStatus: string;

  @ApiProperty({ description: 'The content of the message' })
  @Expose()
  messageText: string;
}
