/*
 * @Author: yangming
 * @LastEditTime: 2022-09-21 22:18:40
 * @Description:
 */
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('appName') private appName: string) { }
  getHello(): string {
    return 'Hello World!' + this.appName;
  }
}
