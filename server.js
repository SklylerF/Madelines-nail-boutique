const express = require("express");
const app = express();
// const expbs = require("express-handlebars");
const path = require("path");

// app.engine(
//     "handlebars",
//     epbs({
//         defaultLayouts: "layout",
//         layoutDir: path.join(_dirname, "views/mainLayout"),
//     })
// );

const routes = require("./controllers");
// const helpers = require("./utils/");
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;

// Create the Handlebars.js engine object with custom helper functions
// const hbs = exphbs.create({ helpers });

// // Inform Express.js which template engine we're using
// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening"));
});
