import { Module } from '@nestjs/common';

import { ConfigModule as ConfigModuleRoot } from '@nestjs/config';
import { ConfigModule } from './config.modules';
import { TypeOrmModule } from './db/typeorm.module';
import { UserModule } from './entities/user/user.module';
import { ClientModule } from './entities/client/client.module';

@Module({
  imports: [
    ConfigModuleRoot.forRoot(),
    ConfigModule,
    TypeOrmModule,
    ClientModule,
    UserModule,
  ],
})
export class AppModule {}
