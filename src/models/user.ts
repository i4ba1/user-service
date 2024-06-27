import { timeStamp } from "console";
import { DataTypes, Model } from "sequelize";
import { Column, Table } from "sequelize-typescript";

@Table({
    timestamps: false,
    tableName: "dogs"
})
export class User extends Model {
    @Column({
        type: DataTypes.BIGINT,
        allowNull: false,
      })
        id!: bigint;
    
    @Column({
        type: DataTypes.STRING,
        allowNull: false,
    })
        firstName!: string;
    
    @Column({
        type: DataTypes.STRING,
        allowNull: false,
    })
        lastName!: string;

    @Column({
        type: DataTypes.STRING,
        allowNull: false,
    })
        lastName!: string;

    @Column({
        type: DataTypes.STRING,
        allowNull: false,
    })
        lastName!: string;
    
    address: number;
    age: number;
    email: string;
    mobilePhone: string;
    gender: boolean;
}