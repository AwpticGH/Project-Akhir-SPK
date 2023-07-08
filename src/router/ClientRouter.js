const RouterDictionary = require("../dictionary/RouterDictionary");
const express = require("express");

const router = express.Router();

router.get(RouterDictionary.HOME, (request, response)  => {
    // arahin ke file dashboard
    console.log("ClientRouter.get(HOME) = " + request.originalUrl);
});

router.get(RouterDictionary.LOGIN, (request, response) => {
   // arahin ke file login
    response.send(
        `<h1>Halo dari ${RouterDictionary.LOGIN}</h1>`
    );
});

module.exports = router;