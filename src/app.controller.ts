/*
 * @Author: yangming
 * @LastEditTime: 2022-09-21 22:17:33
 * @Description:
 */
import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// @Controller()
// export class AppController {
//   constructor(@Inject('hd') private readonly appService: AppService) { }

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

// @Controller()
// export class AppController {
//   constructor(@Inject('hd') private readonly appService: AppService) { }

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
