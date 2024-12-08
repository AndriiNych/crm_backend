import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contract } from './contract.entity';
import { ContractController } from './contract.controller';
import { EntityService } from '@src/services/providers/entity.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contract])],
  controllers: [ContractController],
  providers: [EntityService],
})
export class ContractModule {}
