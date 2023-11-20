import { Table, Column, Model, DataType, ForeignKey, BelongsTo, PrimaryKey, Unique } from 'sequelize-typescript';
import { Doctor } from './doctor';
import { Paciente } from './paciente';

@Table({
  timestamps: false,
  tableName: 'cita',
})
export class Cita extends Model {
  @Column({
    type: DataType.DATE,
    allowNull: false,
    primaryKey: true,
  })
  fecha_hora!: Date;

  // Se utiliza para indicar que la columna en la que se coloca es una clave foránea que hace referencia al modelo `Doctor`. 
  // En otras palabras, esta columna almacena el ID de un `Doctor`
  @ForeignKey(() => Doctor)
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_profesional!: number;

  @ForeignKey(() => Paciente)
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_numeroCedula!: number;

  /*
  @Unique
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  id_cita!: number;
  */

  // Se utiliza para indicar una relación de pertenencia. En este caso, está diciendo que el modelo en el que se coloca pertenece a un `Doctor`. 
  // Esto establece una asociación entre este modelo y el modelo `Doctor`
  // Sequelize utilizará esta información para unir las tablas correctamente cuando se realicen consultas
  @BelongsTo(() => Doctor)
  doctor!: Doctor;

  @BelongsTo(() => Paciente)
  paciente!: Paciente;
}
