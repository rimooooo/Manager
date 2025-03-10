const express= require ("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require ("method-override");
const ejsMate = require ("ejs-mate");
// const ExpressError = require("./utils/expressError");
// const session = require("express-session");
// const MongoStore = require('connect-mongo');
// const flash = require("connect-flash");
// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const User = require("./models/user");

// const listingRouter = require("./routes/listing.js");
// const reviewRouter = require("./routes/review.js");
// const userRouter = require("./routes/user.js");

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"public")));

const mongoDb_url = "mongodb://localhost:27017/FinanceManager";
async function main(){
   await mongoose.connect(mongoDb_url);
}
main().then(() => {
   console.log("Connected to MongoDB");
})
.catch((err) => {
   console.log(err);
});

//routes
app.use("/transactions" , transactionsRouter);
//app.use("/transactions/:id/reviews" , reviewRouter);
app.use("/" , userRouter);

app.use("*", (req,res,next) => {
   next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
   let {statusCode = 500 , message = "some real shit error occured"} = err;
   //res.statusCode(500).send(message);
   res.status(statusCode).render("errors.ejs" , {message});
});

app.get("/", (req,res) => {
   res.send("helllo i am root");
})

app.listen(8080, () => {
   console.log("Server is running on port 8080");
})