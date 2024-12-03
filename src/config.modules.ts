import { Module } from "@nestjs/common";
import {ConfigModule as MsSqlConfigModule } from '@nestjs/config'

@Module({
    imports: [MsSqlConfigModule.forRoot()]
})
export class ConfigModule {}