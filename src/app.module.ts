import { Module } from '@nestjs/common';

import { ConfigModule as ConfigModuleRoot } from '@nestjs/config';
import { ConfigModule } from './config.modules';
import { TypeOrmModule } from './db/typeorm.module';
import { UserModule } from './entities/user/user.module';
import { ClientModule } from './entities/client/client.module';
import { ContractModule } from './entities/contract/contract.module';
import { CustomerModule } from './entities/customer/customer.module';
import { MessageModule } from './entities/message/message.module';
import { ActiveModule } from './entities/active/active.module';

@Module({
  imports: [
    ConfigModuleRoot.forRoot(),
    ConfigModule,
    TypeOrmModule,
    ActiveModule,
    ClientModule,
    ContractModule,
    CustomerModule,
    MessageModule,
    UserModule,
  ],
})
export class AppModule {}
