// personal
// router
const CriteriaRouter = require("./client/CriteriaRouter");
const EmployeeRouter = require("./client/EmployeeRouter");
const MatrixScoreRouter = require("./client/MatrixScoreRouter");
const SupervisorRouter = require("./client/SupervisorRouter");
// dictionary
const RouterDictionary = require("../dictionary/web/router/RouterDictionary");

// third-party
const express = require("express")
const router = express.Router();

router.get(RouterDictionary.HOME, (request, response)  => {
    // arahin ke file dashboard
    console.log("ClientRouter.get(HOME) = " + request.originalUrl);
    return response.render("index", {
        layout: "static/main",
        page_title: "Home"
    });
});

router.use(CriteriaRouter);
router.use(EmployeeRouter);
router.use(MatrixScoreRouter);
router.use(SupervisorRouter);

module.exports = router;