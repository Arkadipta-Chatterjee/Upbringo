Backend framework for Upbringo

The framework is basically designed in NodeJS that accepts request from Postman and works on a mySQL database in localhost.
So basically the parameters for which values need to be entered by the user to see the functionality of the API backend framework are:

Name:Name of the shop
Address:Address of the shop
Email:Email Id of the shop
Contact:Contact Number of the shop
Buyer:Name of the Buyer
Buyer_Contact:Contact Number of the Buyer
Date_Time:Date and Time of the transaction
Item_Name:Item being purchased
Item_Quantity:Number of items being purchased
Item_Price_per_Quantity:rate of each quantity item
Discount:Discount rate per item(excluding GST)
GST:GST per item
total_amt:Total amount of the specified item(including GST)
overallTotal:Overall amount to be paid
invoice_status:Status of invoice being paid or not paid(Boolean value)

All the above parameters accept values in their natural format and have a default value of NULL.I have made it in a single route finding that making multiple routes is cumbersome for the shop owner and providing all functionalities from a single point is way more effective.Passing the parameters mentioned above through postman enters all the above values in a mySQL DB.

