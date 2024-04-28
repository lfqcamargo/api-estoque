import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../system/entities/User";
import { Addressing } from "./Addressing";


@Entity('coes')
export class Hall {
    @PrimaryGeneratedColumn({ name: "coes_id" })
    id: number;

    @Column({ name: "coes_dsc" })
    description: string;

    @CreateDateColumn({ name: "coes_dat_cria", type: "datetime" })
    dateCreated: Date

    @UpdateDateColumn({ name: "coes_dat_atua", type: "datetime" })
    lastChangeDate: Date

    @Column({ name: "coes_obs", nullable:true })
    observation: string

    @ManyToOne(() => User, user => user.halls)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => Addressing, addressing => addressing.hall)
    addressings: Addressing[];
};