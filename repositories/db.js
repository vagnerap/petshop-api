import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://iclkicui:y-iMRwr9zsGVftccvA5Ocnu_IfqpgcfI@kesavan.db.elephantsql.com/iclkicui",
  {
    dialect: "postgres",
    define: {
      timestamps: false
    }
  }
);

export default sequelize;