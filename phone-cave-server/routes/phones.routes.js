// IMPORTS
const allPhones = require("../data/phones.json")
const router = require("express").Router();

//GET "/phones" => give all phones list

router.get("/", (req, res, next) =>{
    res.json(allPhones);
});


// GET "/phones/:phoneId" => give a specific phone

router.get("/:phoneId", (req, res, next) =>{
    const foundPhone = allPhones.filter(phone => phone.id == req.params.phoneId);
    res.json(foundPhone[0]);
})

module.exports = router;