import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserHouseService } from './user-house.service';
import { CreateUserHouseDto } from './dto/create-user-house.dto';
import { UpdateUserHouseDto } from './dto/update-user-house.dto';

@Controller('user-houses')
export class UserHouseController {
  constructor(private readonly userHouseService: UserHouseService) {}

  @Post()
  create(@Body() createUserHouseDto: CreateUserHouseDto) {
    return this.userHouseService.create(createUserHouseDto);
  }

  @Get()
  findAll() {
    return this.userHouseService.findAll();
  }

  @Get('contract')
  findOne(@Query() query: {idOwner: string, idHouse: string}) {
    return this.userHouseService.findOne(query.idOwner, query.idHouse);
  }

  @Delete('contract')
  remove(@Query() query: {idOwner: string, idHouse: string}) {
    return this.userHouseService.remove(query.idOwner, query.idHouse);
  }
}
