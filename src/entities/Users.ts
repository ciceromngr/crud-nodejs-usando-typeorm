import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("users")
class Users {

    @PrimaryGeneratedColumn()
    readonly id: string

    @Column()
    nome: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}

export { Users }
