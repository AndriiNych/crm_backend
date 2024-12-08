import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityService } from '@src/services/providers/entity.service';
import { Message } from './message.entity';
import { MessageController } from './message.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers: [MessageController],
  providers: [EntityService],
})
export class MessageModule {}

//TODO rename "messages" to "message"
