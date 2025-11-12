import mysql from 'mysql';

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employeems'
});

con.connect((err) => {
  if (err) {
    console.log('Database connection error:', err);
  } else {
    console.log('Database connected successfully');
  }
});

export default con;