// const mongoose = require("mongoose");
// const initData = require("./data");
// const Transaction = require("../models/transactions");


// async function main(){
//    await mongoose.connect("mongodb://localhost:27017/FinanceManager");
// }

// main().then(() => {
//    console.log("Connected to MongoDB");
// })
// .catch((err) => {
//    console.log(err);
// });

// const initDb = async () => {
//    await Transaction.deleteMany();
//    await Transaction.insertMany(initData.data);
//    console.log("Database initialized");
// };

// initDb();

import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    //mongo server url
    const url = "mongodb://localhost:27017/FinanceManager";

    const {connection} = await mongoose.connect(url);

    console.log(`MongoDB Connection successful to ${connection.host}`);

}