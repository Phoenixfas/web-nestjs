import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Blog } from './interfaces/blog.interface';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel('Blog') private blogModel: Model<Blog>) {}

  async findAll(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }

  async findOne(id: string): Promise<Blog> {
    return this.blogModel.findById(id).exec();
  }

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const createdBlog = new this.blogModel(createBlogDto);
    return createdBlog.save();
  }

  async update(id: string, createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogModel.findByIdAndUpdate(id, createBlogDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Blog> {
    return this.blogModel.findByIdAndDelete(id).exec();
  }
}
