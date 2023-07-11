// dependencies
/* personal
* String Generator
* */
const StringGenerator = require("./src/helper/generator/StringGenerator");
// Router
const ClientRouter = require("./src/router/ClientRouter");
// Dependency Middleware
const DependencyMiddleware = require("./src/middleware/DependencyMiddleware");
// Authentication Middleware
const AuthenticationMiddleware = require("./src/middleware/AuthenticationMiddleware");

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
// dependencies
app.use(DependencyMiddleware);
app.use(AuthenticationMiddleware);
// router
app.use(ClientRouter);


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`App Started! Listening On Port '${PORT}' With Env '${process.env.NODE_ENV}'`);
});

module.exports = app;