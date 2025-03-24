import { Sequelize } from "sequelize";
import db from "../databases/Databases.js";   // bukan dari `config`, tapi dari `databases`

// Membuat tabel "user"
const User = db.define(
  "user", // Nama Tabel
  {
    Judul: Sequelize.STRING,
    Note: Sequelize.STRING,
    Pembuat: Sequelize.STRING,
  }
);

db.sync().then(() => console.log("Database synced"));

export default User;
