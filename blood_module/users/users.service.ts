import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users, 'blood') private usersRepository: Repository<Users>) { }

  async getUsers(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  async getUser(_id: number) {
    // return await this.usersRepository.find({
    //   select: ["fullName", "birthday", "isActive"],
    //   where: [{ "id": _id }]
    // });
    return await this.usersRepository.findOne(_id);
  }

  async getUserLogin(_username: string) {
    return await this.usersRepository.findOne({
      where: [{ "username": _username }]
    });
  }

  async createUser(user: Users) {
    this.usersRepository.save(user);
  }

  async updateUser(user: Users) {
    this.usersRepository.save(user);
  }

  async deleteUser(user: Users) {
    this.usersRepository.delete(user);
  }
}
