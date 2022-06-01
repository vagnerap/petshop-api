import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://lmphjjbl:crj51XYwc0zP-lc5UPYdmvow1h1LRJhd@kesavan.db.elephantsql.com/lmphjjbl",
  {
    dialect: "postgres",
    define: {
      timestamps: false
    }
  }
);

export default sequelize;