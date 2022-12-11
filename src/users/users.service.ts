import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      thirdPartiesid: 1,
      userProfilesid: 1,
      login: 'jgonzalt',
      password: 'Qwerty+12345',
      imageUrl:
        'https://th.bing.com/th/id/OIP.f7HId18s_62ZHKgGC2U7yAHaHa?pid=ImgDet&rs=1',
    },
  ];

  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return { message: 'This action adds a new user', data: createUserDto };
  }

  findAll() {
    return { message: `This action returns all users`, Users: this.users };
  }

  findOne(id: number) {
    return { message: `This action returns a #${id} user` };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return { message: `This action updates a #${id} user` };
  }

  delete(id: number) {
    return { message: `This action removes a #${id} user` };
  }
}
