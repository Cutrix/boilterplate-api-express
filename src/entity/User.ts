import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import {IsNotEmpty, Length} from "class-validator";
import * as bcrypt from "bcryptjs";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(4, 20)
    username: string

    @Column()
    @Length(4, 100)
    password: string

    @Column()
    @IsNotEmpty()
    role: string;

    @Column()
    @CreateDateColumn()
    createdAt: Date

    @Column()
    @UpdateDateColumn()
    updatedAt: Date

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }


}
