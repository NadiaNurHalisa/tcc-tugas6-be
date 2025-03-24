import { Sequelize } from "sequelize";
// Nyambungin db ke BE
const db = new Sequelize("catatan", "root", "", {
 host: "34.66.121.70",
 dialect: "mysql",
});
export default db;