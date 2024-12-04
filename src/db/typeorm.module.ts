import { Module } from '@nestjs/common';
import { TypeOrmModule as MsSqlTypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    MsSqlTypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.MSSQL_HOST,
      port: Number(process.env.MSSQL_PORT),
      username: process.env.MSSQL_USERNAME,
      password: process.env.MSSQL_PASSWORD,
      database: process.env.MSSQL_DATABASE,
      entities: ['dist/entities' + '/**/*.entity.js'],
      // entities: [__dirname + '/**/*.entity{.ts,.js}'], // шлях до ваших сутностей
      synchronize: true, // автоматична синхронізація схем (краще вимкнути у продакшені)
      options: {
        encrypt: false,
        enableArithAbort: true,
      },
      extra: {
        encrypt: false,
        trustServerCertificate: true, // потрібно для локальних підключень або самопідписаних сертифікатів
      },
    }),
  ],
})
export class TypeOrmModule {}
