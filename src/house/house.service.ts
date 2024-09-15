import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateHouseDto } from './dto/create-house.dto';
import { UpdateHouseDto } from './dto/update-house.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class HouseService {

  constructor(private readonly prismaService: PrismaService){}

  async create(createHouseDto: CreateHouseDto) {
    return await this.prismaService.house.create({data: createHouseDto});
  }

  async findAll(): Promise<CreateHouseDto[]> {
    return await this.prismaService.house.findMany();
  }

  async findOne(id: string): Promise<CreateHouseDto> {
    const house = await this.prismaService.house.findUnique({where: {id}});

    if(!house){
      throw new BadRequestException(`House with id ${id} bot found`);
    }

    return house;
  }

  async remove(id: string): Promise<CreateHouseDto> {
    const house = await this.prismaService.house.findUnique({where: {id}});

    if(!house){
      throw new BadRequestException(`House with id ${id} bot found`);
    }

    return await this.prismaService.house.delete({where: {id}});
  }
}
