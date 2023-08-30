import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entity/user.entity';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';

const MYSQL_USER: string = process.env.MYSQL_USER;
const MYSQL_PASSWORD: string = process.env.MYSQL_PASSWORD;
const MYSQL_DATABASE: string = process.env.MYSQL_DATABASE;
const MYSQL_HOST: string = process.env.MYSQL_HOST;
const MYSQL_PORT: number = parseInt(process.env.MYSQL_PORT);

@Module({
  controllers: [AppController],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: MYSQL_HOST,
      port: MYSQL_PORT,
      username: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DATABASE,
      entities: [User],
      synchronize: true,
      ssl: {
        rejectUnauthorized: true,
      },
    }),
    AuthModule,
    ProfileModule,
  ],
})
export class AppModule {}
