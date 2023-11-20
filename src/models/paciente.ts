import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Cita } from './cita';

@Table({
  timestamps: false,
  tableName: 'paciente',
})
export class Paciente extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  })
  id_numeroCedula!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  apellido!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  telefono!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  edad!: Date;

  // Se utiliza para indicar una relación de "uno a muchos". En este caso, está diciendo que un registro de este modelo puede 
  // tener muchos registros `Cita` asociados. Al igual que con `@BelongsTo`, Sequelize utilizará esta información para unir las tablas correctamente cuando se realicen consultas.
  @HasMany(() => Cita)
  citas!: Cita[];
}
