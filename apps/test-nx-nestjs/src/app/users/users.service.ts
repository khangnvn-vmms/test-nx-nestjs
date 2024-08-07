import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/users.entity';
import { Repository } from 'typeorm';
import { ResponseData } from '../../global/responseData';
import { PaginationDto } from '../../dto/pagination/pagination.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async getAllUsers(): Promise<User[]> {
    return  this.usersRepository.find();
  }

  async getUserById(id: number) : Promise<User> {
    const user = await this.usersRepository.findOne({where: {id}});
    if(user){
      return user;
    }
    else{
      throw new ResponseData(undefined, 501, 'Khong tim thay nguoi dung');
    }
  }
  async createUser(userData: User ): Promise<User> {
    if(userData){
      const newUser = this.usersRepository.create(userData);
      return this.usersRepository.save(newUser);
    }
    else{
      throw new ResponseData(undefined, 501, 'Khong co du lieu can tao');
    }
  }

  async updateUser(userData: User, id: number ): Promise<User> {
    const userCheck = await this.usersRepository.findOne({where: {id}});
    if(userCheck){      
      await this.usersRepository.update(id, userData);
      return this.usersRepository.findOne({ where: { id } });
    }
    else{
      throw new ResponseData(undefined, 501, 'Khong co nguoi dung can sua du lieu');
    }
  }

  async deleteUser(id) : Promise<void|{message: string}> {
    const userCheck = await this.usersRepository.findOne({where: {id}});
    if(userCheck){ 
      this.usersRepository.delete(id);
      return {message: "xoa thanh cong"}
    }
    else{
      throw new ResponseData(undefined, 501, 'Khong tim thay nguoi dung can xoa');
    }
  }
}
