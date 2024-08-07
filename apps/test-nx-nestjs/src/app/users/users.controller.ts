import { User } from '../../entities/users.entity';
import { ResponseData } from '../../global/responseData';
import { UsersService } from './users.service';
import { Controller, Get , Post, Put, Delete, Param, Body, Query} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getAllUsers(): Promise<ResponseData<User[]>> {
    try {
      return new ResponseData<User[]>(await this.usersService.getAllUsers(), 200, 'Lay danh sach thanh cong');
    } catch (error) {
      return new ResponseData<User[]>(error.data, error.statusCode, `Loi: ${error.message}`);
    }
  }

  @Get(':id')
  async getUserById(@Param('id') id: number):  Promise<ResponseData<User>> {
    try{
      return new ResponseData<User>(await this.usersService.getUserById(id), 200, 'Lay du lieu nguoi dung thanh cong');
    }
    catch(error){
      console.log(error)
      return new ResponseData<User>(error.data, error.statusCode, `Loi: ${error.message}`);
    }
  }

  @Post()
  async createUser(@Body() userData: User): Promise<ResponseData<User>> {
    try {
      return new ResponseData<User>(await this.usersService.createUser(userData), 200, 'Tao nguoi dung thanh cong');
    } catch (error) {
      return new ResponseData<User>(error.data, error.statusCode, `Loi: ${error.message}`);
    }
  }

  @Put(':id')
  async updateUser(@Body() userData: User, @Param('id') id: number): Promise<ResponseData<User>> {
    try {
      return new ResponseData<User>(await this.usersService.updateUser(userData, id), 200, 'Cap nhat nguoi dung thanh cong');
    } catch (error) {
      return new ResponseData<User>(error.data, error.statusCode, `Loi: ${error.message}`);
    }

  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<ResponseData<void| {message: string}>> {
    try {
      return new ResponseData<void| {message: string}>(await this.usersService.deleteUser(id), 200, 'Xoa nguoi dung thanh cong');
    } catch (error) {
      return new ResponseData<void| {message: string}>(error.data, error.statusCode, `Loi: ${error.message}`);
    }
  } 
}
