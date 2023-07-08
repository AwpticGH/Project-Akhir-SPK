const RouterDictionary = require("../dictionary/RouterDictionary");
const express = require("express");

const router = express.Router();

router.get(RouterDictionary.HOME, (request, response)  => {
    // arahin ke file dashboard
    console.log("ClientRouter.get(HOME) = " + request.originalUrl);
    return response.render("index", {
        layout: "static/main",
        page_title: "Home"
    });
});

router.get(RouterDictionary.LOGIN, (request, response) => {
   // arahin ke file login
    return response.send(
        `<h1>Halo dari ${RouterDictionary.LOGIN}</h1>`
    );
});

module.exports = router;