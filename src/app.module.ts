import { Module } from '@nestjs/common';

import { ConfigModule as ConfigModuleRoot } from '@nestjs/config';
import { ConfigModule } from './config.modules';
import { TypeOrmModule } from './db/typeorm.module';

@Module({
  imports: [ConfigModuleRoot.forRoot(), ConfigModule, TypeOrmModule],
})
export class AppModule {}
