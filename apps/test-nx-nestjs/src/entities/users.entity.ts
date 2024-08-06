import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm"

@Entity('users')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    address: string
}