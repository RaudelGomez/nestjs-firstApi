import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostService {

  constructor(private prisma: PrismaService) {}
  
  async create(createPostDto: CreatePostDto){
    return await this.prisma.post.create({data: createPostDto});
  }

  async findAll(): Promise<CreatePostDto[]> {
    return await this.prisma.post.findMany();
  }

  async findOne(id: number) {
    const post  = await this.prisma.post.findUnique({where: {id}});

    if(!post){
      throw new NotImplementedException(`Post with id ${id} not found`);
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const post  = await this.prisma.post.findUnique({where: {id}});

    if(!post){
      throw new NotImplementedException(`Post with id ${id} not found`);
    }
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto
    });
  }

  remove(id: number) {
    const post = this.prisma.post.findUnique({where: {id}});

    if(!post){
      throw new NotImplementedException(`Post with id ${id} not found`)
    }

    return this.prisma.post.delete({where: {id}});
  }
}
