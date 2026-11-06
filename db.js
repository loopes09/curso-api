const mysql = require("mysql/promise")

export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "escola"
})
