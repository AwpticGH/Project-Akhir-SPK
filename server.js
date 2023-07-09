// dependencies
/* personal
* String Generator
* Router
* */
const StringGenerator = require("./src/helper/generator/StringGenerator");
const ClientRouter = require("./src/router/ClientRouter");
// core
const path = require("path");
// third party
const express = require("express");
const session = require("express-session");
const ejsLayouts = require("express-ejs-layouts");

const app = express();
app.set("views", "./web/views");
app.set("trust proxy", true);
app.set("view engine", "ejs");

if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === undefined) {
    const liveReload = require("livereload");
    const connectLiveReload = require("connect-livereload");

    const myServer = liveReload.createServer();
    myServer.watch(path.join(__dirname, "/web"));
    myServer.server.once("connection", () => {
        setTimeout(() => {
            myServer.refresh("/");
        }, 100);
    });
    app.use(connectLiveReload());
}

// middlewares
// third party
app.use(ejsLayouts);
app.use(
    session({
        secret: StringGenerator.generateSecretKey(),
        resave: false,
        saveUninitialized: false
    })
);
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "/web/resources")));

// personal
app.use("/", ClientRouter);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App Started! Listening On Port ${PORT}`);
    console.log(`env = ${process.env.NODE_ENV}`);
});

module.exports = app;