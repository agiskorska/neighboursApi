const db = require('../connect');

class Owner {
    constructor(data) {
        this.firstName = data.firstname;
        this.lastName = data.lastname;
        this.houseId = data.houseid;
        this.occupants = data.noofoccupants;
        this.age = data.age;
    }

    static getAllOwners() {
        return new Promise (async (resolve, reject) => {
            try {
                const data = await db.query("SELECT * FROM owners;");
                let owners = data.rows.map(o => new Owner(o));
                resolve (owners);
            } catch (err) {
                console.log(err)
                reject ('unable to connect to db')
            }
        })
    }
    
    static getOwnerById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                const data = await db.query("SELECT * FROM owners WHERE id = $1;", [id]);
                let owner = data.rows[0]
                resolve (owner);
            } catch (err) {
                console.log(err)
                reject ('unable to connect to db')
            }
        })
    }

    static postNewOwner() {
        let owners;
        return owners
    }
    
    static ammendOwner(id) {
        let owners;
        return owners
    }
}

module.exports = Owner;