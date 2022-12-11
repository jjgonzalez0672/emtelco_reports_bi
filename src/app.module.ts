import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { enviroments } from 'enviroments';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || 'develepment.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'emtelco',
      password: 'Emtelco2023',
      database: 'reports_bi',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: false,
      synchronize: false,
      options: { encrypt: false },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
