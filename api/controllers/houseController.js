const oneHouse = (req, res) => {
    res.status(200).send({message: "fetched the house" + req.params.id});
}

const byPostcode = (req, res) => {
    const message = 'fetched all houses within ' + req.params.id + ' area, with people between ' + minAge + ' and ' + maxAge + ' and households of ' + size;
    res.status(200).send({message: message});
}

module.exports = { oneHouse, byPostcode }