import { Model, DataTypes } from 'sequelize';
import db from '.';
import Team from './team';

class Match extends Model {
  public id: number;
  public homeTeam: number;
  public homeTeamGoals: number;
  public awayTeam: number;
  public awayTeamGoals: number;
  public inProgress: boolean;
}

Match.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  homeTeam: DataTypes.INTEGER,
  homeTeamGoals: DataTypes.NUMBER,
  awayTeam: DataTypes.INTEGER,
  awayTeamGoals: DataTypes.NUMBER,
  inProgress: DataTypes.BOOLEAN,
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Team.belongsTo(Match, { foreignKey: 'homeTeam', as: 'foreignHomeTeam' });
Team.belongsTo(Match, { foreignKey: 'awayTeam', as: 'foreignAwayTeam' });

Match.hasMany(Team, { foreignKey: 'homeTeam', as: 'foreignHomeTeam' });
Match.hasMany(Team, { foreignKey: 'awayTeam', as: 'foreignAwayTeam' });

export default Match;
