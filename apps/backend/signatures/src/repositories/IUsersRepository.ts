import { IUser, User } from "../entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<IUser | null>;
  createUser(user: User): Promise<IUser>;
  findById(id: string): Promise<IUser | null>;
}