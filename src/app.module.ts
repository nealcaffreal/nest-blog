/*
 * @Author: yangming
 * @LastEditTime: 2022-09-21 22:14:58
 * @Description:
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController, CatsController],
  providers: [
    AppService,
    {
      provide: 'appName',
      useValue: '后盾人',
    },
  ],
})
export class AppModule { }

// @Module({
//   imports: [UsersModule],
//   controllers: [AppController, CatsController],
//   providers: [
//     {
//       provide: 'hd',
//       useClass: AppService,
//     },
//   ],
// })
// export class AppModule { }
