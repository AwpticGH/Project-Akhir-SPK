// dependencies
/* personal
* String Genrator
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
    console.log(`env = ${process.env.NODE_ENV}`);
    const liveReload = require("livereload");
    const connectLiveReload = require("connect-livereload");

    const liveReloadServer = liveReload.createServer();
    liveReloadServer.watch(path.join(__dirname, "/web"));
    liveReloadServer.server.once("connection", () => {
        setTimeout(() => {
            liveReloadServer.refresh("/");
        }, 100);
    });
    app.use(connectLiveReload);
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
app.use(ClientRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App Started! Listening On Port ${PORT}`);
});

module.exports = app;