const mysql=require("mysql2");

const pool= mysql.createPool({
    host:"localhost",
    user:"root",
    password:"danimola",
    database:"myBooks",
    waitForConnections:true,
    connectionLimit:10,
    maxIdle:10,
    idleTimeout:60000,
    queueLimit:0

}).promise();
console.log("conexion con la BBD creada");
module.exports={pool};