import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<CreateUserDto[]> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<CreateUserDto> {
    const user = await this.prisma.user.findUnique({
      where: {id: id}
    })
    if(!user){
      throw new NotImplementedException(`User with id ${id} not found`);
    }
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return await this.prisma.user.create({data:createUserDto});
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<CreateUserDto> {
    const user = await this.prisma.user.findUnique({
      where: {id: id}
    });
    if (!user) {
      throw new NotImplementedException(`User with id ${id} not found`);
    }
    return this.prisma.user.update({
      where: { id: id },
      data: updateUserDto
    });
  }

  async remove(id: string): Promise<CreateUserDto> {
    const user = await this.prisma.user.findUnique({
      where: {id: id}
    })
    if(!user){
      throw new NotImplementedException(`User with id ${id} not found`);
    }
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
