import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserHouseDto } from './dto/create-user-house.dto';
import { UpdateUserHouseDto } from './dto/update-user-house.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserHouseService {

  constructor(private readonly prismaService: PrismaService){}

  async create(createUserHouseDto: CreateUserHouseDto): Promise<CreateUserHouseDto> {
    return await  this.prismaService.usersHouses.create({data: createUserHouseDto});
  }

  async findAll(): Promise<CreateUserHouseDto[]> {
    return await  this.prismaService.usersHouses.findMany();
  }

  async findOne(idOwner: string, idHouse: string) {
    const propierty = await this.prismaService.usersHouses.findFirst(
      {where: {ownerId: idOwner, houseId: idHouse}}
    );

    if(!propierty){
      throw new BadRequestException('Not match')
    }

    return propierty;
  }

  async remove(idOwner: string, idHouse: string) {
    const propierty = await this.prismaService.usersHouses.findFirst(
      {where: {ownerId: idOwner, houseId: idHouse}}
    );

    if(!propierty){
      throw new BadRequestException('Not match')
    }

    return await this.prismaService.usersHouses.delete({
      where: {
        ownerId_houseId: {
          ownerId: idOwner,
          houseId: idHouse,
        },
      },
    });
   }
}
