const Owner = require("../models/Owner");
const tryCatch = (res, fun, codeSuccess, codeFail, index = null) =>  {
    try {
        let owner
        if(typeof id != 'null') {
            owner = fun();
        } else {
            owner = fun(id);
        }
        res.status(codeSuccess).json(owner);
    } catch (e) {
        res.status(codeFail).json({ error: e.message });
    }
}
const allOwners = async (req, res) => {
    try {
        const owners = await Owner.getAllOwners();
        res.status(200).json({owners});
    } catch (e) {
        res.status(500).json({ error: e.message });
    }};

const oneOwner = async (req, res) => {
    try {
        const owner = await Owner.getOwnerById(req.params.id);
        res.status(200).json(owner);
    } catch (e) {
        res.status(404).json({ error: e.message });
    }
};

const newOwner = (req, res) => {
    res.status(201).send({message: 'created a new owner'});
};

const changeOwner = (req, res) => {
    res.status(201).send({message: 'changed owner ' + req.params.id});
};

module.exports = { allOwners, oneOwner, newOwner, changeOwner }