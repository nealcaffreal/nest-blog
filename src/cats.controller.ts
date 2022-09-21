/*
 * @Author: yangming
 * @LastEditTime: 2022-09-21 17:23:18
 * @Description:
 */
import { Request } from 'express'
import { Controller, Get, Param, Post, Req, Query } from '@nestjs/common'
@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This action adds a new cat'
  }
  @Get('profile/:id')
  findAll(@Param() params): string {
    console.log(params.id)
    return 'This action returns all cats'
  }
  @Get('list')
  findList(@Query('id') id, @Query('sex') sex): string {
    console.log(id)
    console.log(sex)
    return 'This action returns all cats'
  }
}
