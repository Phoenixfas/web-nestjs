import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://fasika1515:webasspass@cluster0.l2uvkg9.mongodb.net/mela?retryWrites=true&w=majority&appName=Cluster0'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    UsersModule, 
    AuthModule, 
    BlogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}