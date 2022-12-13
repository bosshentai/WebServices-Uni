const Sequelize = require("sequelize")
const db_config = require("../config/database")


const dbConn = new Sequelize(db_config)



const connect = async () =>{
  try {
    await dbConn.authenticate();
    console.log("Connection has been stabilized successfully");
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
}
connect();


module.exports = dbConn


