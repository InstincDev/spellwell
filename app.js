const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./config/db");
const homeRoutes = require("./routes/home");
const great_hallRoutes = require("./routes/great_hall");
const housesRoutes = require("./routes/houses");

//Load .env in config  folder
require("dotenv").config({ path: "./config/.env" });

// Config Passport
require("./config/passport")(passport);

//Connect to Db
connectDB();

// EJS layouts for views
app.use(expressLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
// Static folder
app.use(express.static("public"));
// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//logging
app.use(logger(dev));

//forms for put / delete
app.use(methodOverride("_method"));

//Sessions - stored in mongodb
app.use(
    session({
        secret: "keyword cat",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Flash messages for errors, info, ect
app.use(flash());

// Routes
app.use("/", homeRoutes);
app.use("/great_hall", great_hallRoutes);
app.use("/houses", housesRoutes);

app.listen(process.env.PORT, () => {
    console.log(
        `Server running on ${process.env.NODE_ENV} mode on PORT ${PORT}`
    );
});
