var mysql = require("mysql");
var express = require("express");

app = express();
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "upbringo",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql1 =
    "CREATE TABLE shopdetails(Name VARCHAR(50), Address TEXT, Contact TEXT, Email TEXT) ";
  var sql2 =
    "CREATE TABLE invoicedetails(Buyer VARCHAR(75), Buyer_Contact TEXT, Date_Time TEXT, Item_Name TEXT, Item_Quantity TEXT, Item_Price_per_Quantity TEXT, Discount TEXT, GST TEXT, total_amt TEXT, overallTotal TEXT)";
  var sql3 = "CREATE TABLE invoicestatus(invoice_status BOOLEAN)";
  con.query(sql1, function (err, result) {
    if (err) throw err;
    console.log("Table1 created");
  });
  con.query(sql2, function (err, result) {
    if (err) throw err;
    console.log("Table2 created");
  });

  con.query(sql3, function (err, result) {
    if (err) throw err;
    console.log("Table3 created");
  });
});

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql =
//     "CREATE TABLE invoicedetails(Buyer VARCHAR(75),Buyer_Contact BIGINT(10),Date_Time TEXT,Item_Name TEXT,Item_Quantity INT(11),Item_Price_per_Quantity BIGINT(20),Discount INT(11),GST INT(11),total_amt BIGINT(20),overallTotal BIGINT(20))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

app.post("/shopdetails", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  let Name = req.query.Name;
  let Email = req.query.Email;
  let Address = req.query.Address;
  let Contact = req.query.Contact;
  // let Buyer = req.query.Buyer;
  // let Buyer_Contact = req.query.Buyer_Contact;
  // let Date_Time = req.query.Date_Time;

  // let overallTotal = req.query.overallTotal;
  // let Item_Name = req.query.Item_Name;
  // let Item_Quantity = req.query.Item_Quantity;
  // let Item_Price_per_Quantity = req.query.Item_Price_per_Quantity;
  // let Discount = req.query.Discount;
  // let GST = req.query.GST;
  // let total_amt = req.query.total_amt;
  // let invoice_status = req.query.invoice_status;
  let sql =
    "INSERT INTO shopdetails(Name,Email,Contact,Address)VALUES(?,?,?,?)";
  con.query(
    sql,
    [
      Name,
      Email,
      Contact,
      Address,
      // Buyer,
      // Buyer_Contact,
      // Date_Time,
      // overallTotal,
      // Item_Name,
      // Item_Quantity,
      // Item_Price_per_Quantity,
      // Discount,
      // GST,
      // total_amt,
      // invoice_status,
    ],
    (err, result) => {
      if (err) throw err;

      res.write("Inserted...");
      res.end();
    }
  );
});

app.post("/invoicedetails", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  let Buyer = req.query.Buyer;
  let Buyer_Contact = req.query.Buyer_Contact;
  let Date_Time = req.query.Date_Time;

  let overallTotal = req.query.overallTotal;
  let Item_Name = req.query.Item_Name;
  let Item_Quantity = req.query.Item_Quantity;
  let Item_Price_per_Quantity = req.query.Item_Price_per_Quantity;
  let Discount = req.query.Discount;
  let GST = req.query.GST;
  let total_amt = req.query.total_amt;

  let sql =
    "INSERT INTO invoicedetails(Buyer,Buyer_Contact,Date_Time,overallTotal,Item_Name,Item_Quantity,Item_Price_per_Quantity,Discount,GST,total_amt)VALUES(?,?,?,?,?,?,?,?,?,?)";
  con.query(
    sql,
    [
      Buyer,
      Buyer_Contact,
      Date_Time,
      overallTotal,

      Item_Name,
      Item_Quantity,
      Item_Price_per_Quantity,
      Discount,
      GST,
      total_amt,
    ],
    (err, result) => {
      if (err) throw err;

      res.write("Inserted...");
      res.end();
    }
  );
});
// app.post("/invoice/Item", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   let Item_Name = req.query.Item_Name;
//   let Item_Quantity = req.query.Item_Quantity;
//   let Item_Price_per_Quantity = req.query.Item_Price_per_Quantity;
//   let Discount = req.query.Discount;
//   let GST = req.query.GST;
//   let total_amt = req.query.total_amt;

//   let sql =
//     "INSERT INTO shopdetails(Item_Name,Item_Quantity,Item_Price_per_Quantity,Discount,GST,total_amt)VALUES(?,?,?,?,?,?)";
//   con.query(
//     sql,
//     [
//       Item_Name,
//       Item_Quantity,
//       Item_Price_per_Quantity,
//       Discount,
//       GST,
//       total_amt,
//     ],
//     (err, result) => {
//       if (err) throw err;

//       res.write("Inserted...");
//       res.end();
//     }
//   );
// });

app.post("/invoice_status", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  let invoice_status = req.query.invoice_status;
  let sql = "INSERT INTO invoicestatus(invoice_status)VALUES(?)";
  con.query(sql, [invoice_status], (err, result) => {
    if (err) throw err;

    res.write("Inserted...");
    res.end();
  });
});
app.listen(3000);
