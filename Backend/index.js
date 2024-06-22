const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;
const corsOptions = require("./middleware/corsmiddleware");
const cors = require('cors');
var connection = require('./database');

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors(corsOptions));

// Define a route for retrieving data
app.get('/getCompanyList', function(req, res) {
  let sql = "SELECT * FROM company_info;";
  connection.query(sql, function(error, results) {
    if (error) throw error;
    console.log(results);
    res.send(results);
  });
});

// Define a route for inserting data
app.post('/addCompany', function(req, res) {
  const { id, companyname, moc, academic_year } = req.body;
  let sql = "INSERT INTO company_info (id, company_name, moc, academic_year) VALUES (?, ?, ?, ?)";
  console.log(req.body,"data get successfully");
  connection.query(sql, [id, companyname, moc, academic_year], function(error, results) {
    if (error) throw error;
    res.send({ message: 'Company added successfully!', results });
  });
});


app.post('/editCompany/:id', function(req, res) {
  const id = req.params.id;
  console.log(id);
  const { moc, academic_year } = req.body;
  let sql = "UPDATE company_info SET moc = ?, academic_year = ? WHERE id = ?";
  console.log(req.body,"data update successfully");
  connection.query(sql, [moc, academic_year, id], function(error, results) {
    if (error) throw error;
    res.send({ message: 'Company edited successfully!', results });
  });
});

app.post('/deleteCompany/:id', function(req, res) {
  const id = req.params.id;
  console.log("ID: ",id);
  
  let sql = `DELETE  FROM company_info WHERE id=?`;
  console.log(req.body,"data Deleted successfully");
  connection.query(sql, id, function(error, results) {
    if (error) throw error;
    res.send({ message: 'Company edited successfully!', results });
  });
});

// Start the server
app.listen(port, function() {
  console.log(`Server is running on http://localhost:${port}`);
  connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected to the MySQL database.');
  });
});

// const allowedOrigins = ["http://localhost:3000"];
