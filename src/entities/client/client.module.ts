import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { ClientController } from './client.controller';
import { EntityService } from '@src/services/providers/entity.service';
import { ClientService } from './client.service';
import { ClientTransaction } from './client.transaction';

@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ClientController],
  providers: [ClientService, ClientTransaction],
})
export class ClientModule {}
