import { UserCreation } from '../../dto/users/request/userCreation';
import { User } from '../../entities/users.entity';
import { UsersService } from './users.service';
import { Controller, Get , Post, Put, Delete, Param, Body} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getAllUsers(): Promise<User[]> {
    try {
      return this.usersService.getAllUsers();
    } catch (error) {
      console.log(error);
    }
  }

  @Get(':id')
  async getUserById(@Param('id') id: number): Promise<User> {
    try{
      return this.usersService.getUserById(id);
    }
    catch(err){
      console.log(err)
    }
  }

  @Post()
  async createUser(@Body() user: User): Promise<User> {
    try {
      return this.usersService.createUser(user);
    } catch (error) {
      console.log(error)
    }
  }

  @Put(':id')
  async updateUser(@Body() user: User, @Param('id') id: number): Promise<User> {
    try {
      return this.usersService.updateUser(user, id);
    } catch (error) {
      console.log(error)
    }

  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    try {
      return this.usersService.deleteUser(id);
    } catch (error) {
      console.log(error);
    }
  } 
}
