import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './interfaces/blog.interface';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async findAll(): Promise<Blog[]> {
    return this.blogService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Blog> {
    return this.blogService.findOne(id);
  }

  @Post()
  async create(@Body() blog: Blog): Promise<Blog> {
    return this.blogService.create(blog);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() blog: Blog): Promise<Blog> {
    return this.blogService.update(id, blog);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Blog> {
    return this.blogService.remove(id);
  }
}
