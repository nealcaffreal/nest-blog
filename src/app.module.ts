/*
 * @Author: yangming
 * @LastEditTime: 2022-09-21 16:36:11
 * @Description:
 */
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatsController } from './cats.controller'
import { UsersModule } from './users/users.module'

@Module({
  imports: [UsersModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
