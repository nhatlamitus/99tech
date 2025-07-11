const { Sequelize } = require('sequelize');

const dbPath = "src/data/database.sqlite"

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
  }
});

async function syncDatabase() {
  try {
    await sequelize.sync({ force: false, alter: false });
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
}

module.exports = {
  sequelize,
  syncDatabase
};
