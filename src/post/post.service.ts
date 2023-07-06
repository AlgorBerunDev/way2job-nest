import { Injectable } from '@nestjs/common';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  create(createUserDto: any) {
    throw new Error('Method not implemented.');
  }
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateUserDto: UpdatePostDto) {
    throw new Error('Method not implemented.');
  }
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    return 'this return all posts';
  }
}
