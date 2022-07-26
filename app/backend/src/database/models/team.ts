import { Model, DataTypes } from 'sequelize';
import db from '.';

class Team extends Model {
  public id: number;
  public teamname: string;
}

Team.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  teamName: DataTypes.STRING,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

export default Team;
