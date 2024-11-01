module.exports = (sequelize, DataTypes) => {
    const Community = sequelize.define('Community', {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
      },
    });

    Community.associate = (models) => {
      Community.belongsTo(models.User, { foreignKey: 'creatorId', as: 'creator' });
      Community.hasMany(models.Post, { foreignKey: 'communityId', as: 'posts' });
    };

    return Community;
  };
