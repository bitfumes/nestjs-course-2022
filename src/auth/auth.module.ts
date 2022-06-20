import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [UserModule],
})
export class AuthModule {}
