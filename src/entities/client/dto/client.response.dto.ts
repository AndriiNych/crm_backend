import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class ClientResponseDto {
  @ApiProperty({ description: 'Id client' })
  @Expose()
  id: number;

  @ApiProperty({ description: 'Parent client ID' })
  @Expose()
  clientParentId: number;

  @ApiProperty({ description: 'Name of the client' })
  @Expose()
  clientName: string;

  @ApiProperty({ description: 'Notes about the client' })
  @Expose()
  clientNotes: string;

  @ApiProperty({ description: 'Client phone number' })
  @Expose()
  clientPhone: string;

  @ApiProperty({ description: 'Client address' })
  @Expose()
  clientAdress: string;

  @ApiProperty({ description: 'Client email' })
  @Expose()
  clientEmail: string;

  @ApiProperty({ description: 'Deleted status of the client' })
  @Expose()
  isDeleted: boolean;

  @ApiProperty({ description: 'Creation date' })
  @Expose()
  createdAt: Date;

  @ApiProperty({ description: 'Last updated date' })
  @Expose()
  updatedAt: Date;
}
