const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const User = require("./users");

const transactionSchema = new Schema({
   date: {
      type: Date,
      default: Date.now, // Automatically set to current date
   },
   title: {
      type: String,
      required: true,
   },
   amount: {
      type: Number,
      required: true,
   },
   type: {
      type: String,
      enum: ["income", "expense"], // Only allows "income" or "expense"
      required: true,
   },
   category: {
      type: String,
      required: true,
   },
   // user: [
   //    {
   //       type: Schema.Types.ObjectId,
   //       ref: "User", // Reference to the User model
   //    }
   // ],
});

// Export the model
const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
