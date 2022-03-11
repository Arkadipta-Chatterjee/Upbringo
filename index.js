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
  //Insert a record in the "customers" table:
});

app.post("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  let Name = req.query.Name;
  let Email = req.query.Email;
  let Address = req.query.Address;
  let Contact = req.query.Contact;
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
  let invoice_status = req.query.invoice_status;
  let sql =
    "INSERT INTO shopdetails(Name,Email,Contact,Address,Buyer,Buyer_Contact,Date_Time,overallTotal,Item_Name,Item_Quantity,Item_Price_per_Quantity,Discount,GST,total_amt,invoice_status)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  con.query(
    sql,
    [
      Name,
      Email,
      Contact,
      Address,
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
      invoice_status,
    ],
    (err, result) => {
      if (err) throw err;

      res.write("Inserted...");
      res.end();
    }
  );
});

// app.post("/invoice", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });

//   let sql =
//     "INSERT INTO shopdetails(Buyer,Buyer_Contact,Date_Time,overallTotal)VALUES(?,?,?,?)";
//   con.query(
//     sql,
//     [Buyer, Buyer_Contact, Date_Time, overallTotal],
//     (err, result) => {
//       if (err) throw err;

//       res.write("Inserted...");
//       res.end();
//     }
//   );
// });
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

// app.post("/invoice_status", (req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   let invoice_status = req.query.invoice_status;
//   let sql = "INSERT INTO shopdetails(invoice_status)VALUES(?)";
//   con.query(sql, [invoice_status], (err, result) => {
//     if (err) throw err;

//     res.write("Inserted...");
//     res.end();
//   });
// });
app.listen(3000);

