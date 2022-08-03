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
const allOwners = (req, res) => {
    tryCatch(res, Owner.getAllOwners, 200, 500)
};

const oneOwner = (req, res) => {
    tryCatch(res, Owner.getOwnerById, 201, 500)
};

const newOwner = (req, res) => {
    res.status(201).send({message: 'created a new owner'});
};

const changeOwner = (req, res) => {
    res.status(201).send({message: 'changed owner ' + req.params.id});
};

module.exports = { allOwners, oneOwner, newOwner, changeOwner }