const mysql =require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'Bikerent',
  password:'root',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10
  
});
module.exports=pool.promise();
// 