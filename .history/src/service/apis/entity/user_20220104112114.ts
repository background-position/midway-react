import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
@EntityModel('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({
        length: 30,
    })
    email: string;
    @Column({
        length: 100,
    })
    description: string;
    @Column()
    nick_name: string;
    @Column()
    password: number;
    @Column()
    isPublished: boolean;
}
