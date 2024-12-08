import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityService } from '@src/services/providers/entity.service';
import { Customer } from './customer.entity';
import { CustomerController } from './customer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [EntityService],
})
export class CustomerModule {}
