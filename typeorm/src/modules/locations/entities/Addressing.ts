import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { User } from "../../system/entities/User";
import { Location } from "./Location";
import { SubLocation } from "./SubLocation";
import { Hall } from "./Hall";
import { Shelf } from "./Shelf";
import { Position } from "./Position";


@Entity('enes')
export class Addressing {
    @PrimaryColumn({ name: "loes_id" })
    locationId: number;

    @PrimaryColumn({ name: "sles_id" }) 
    subLocationId: number;

    @PrimaryColumn({ name: "coes_id" }) 
    hallId: number;

    @PrimaryColumn({ name: "pres_id" })  
    shelfId: number;

    @PrimaryColumn({ name: "poes_id" }) 
    positionId: number;

    @CreateDateColumn({ name: "enes_dat_cria", type: "datetime" })
    dateCreated: Date

    @UpdateDateColumn({ name: "enes_dat_atua", type: "datetime" })
    lastChangeDate: Date

    @ManyToOne(() => User, user => user.groups)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Location, location => location.addressings)
    @JoinColumn({ name: 'loes_id', referencedColumnName: 'id' })
    location: Location;

    @ManyToOne(() => SubLocation, subLocation => subLocation.addressings)
    @JoinColumn({ name: 'sles_id', referencedColumnName: 'id' })
    subLocation: SubLocation;

    @ManyToOne(() => Hall, hall => hall.addressings)
    @JoinColumn({ name: 'coes_id', referencedColumnName: 'id' })
    hall: Hall;

    @ManyToOne(() => Shelf, shelf => shelf.addressings)
    @JoinColumn({ name: 'pres_id', referencedColumnName: 'id' })
    shelf: Shelf;

    @ManyToOne(() => Position, position => position.addressings)
    @JoinColumn({ name: 'poes_id', referencedColumnName: 'id' })
    position: Position;

};