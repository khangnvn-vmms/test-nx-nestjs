import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/users.entity';
import { Repository } from 'typeorm';
import { UserCreation } from '../../dto/users/request/userCreation';

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
    return this.usersRepository.findOne({where: {id}});
  }
  async createUser(user: UserCreation ): Promise<User> {
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  async updateUser(user: UserCreation, id: number ): Promise<User> {
    await this.usersRepository.update(id, user);
    return this.usersRepository.findOne({ where: { id } });
  }

  async deleteUser(id) : Promise<any> {
    this.usersRepository.delete(id);
    return {message: "xoa thanh cong"}
  }
}
