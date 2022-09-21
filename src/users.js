const User = require("./User");
const { readFile, writeFile } = require("./utils");

const users = Symbol("users");

class usersCollection {
  constructor() {
    (async function () {
      this[users] = await readFile();
    }.bind(this)());
  }
  createUser(gender, name, contact, address, photoUrl) {
    const user = new User(gender, name, contact, address, photoUrl);
    this[users].push(user);
    writeFile(this[users]);
    return user;
  }
  findAllUser() {
    return this[users];
  }
  /**
   *
   * @param {string} id
   * @return {User}
   */
  findById(id) {
    const user = this[users].find(
      /**
       *
       * @param {User} user
       * @returns
       */
      (user) => user.id == id
    );
    return user;
  }

  findRandomUser() {
    const randomNumber = Math.floor(Math.random() * this[users].length);
    return this[users][randomNumber];
  }
  /**
   *
   * @param {string} userId
   * @param {{gender: string, name:string, contact: string, address: string, photoUrl: string}} userBody
   *
   */
  updateUserById(userId, userBody) {
    const user = this.findById(userId);
    user.gender = userBody.gender ?? user.gender;
    user.name = userBody.name ?? user.name;
    user.contact = userBody.contact ?? user.contact;
    user.address = userBody.address ?? user.address;
    user.photoUrl = userBody.photoUrl ?? user.photoUrl;
    writeFile(this[users]);
    return user;
  }
  /**
   * @param {string} userid
   * @return {boolean}
   */
  deleteById(userid) {
    const index = this[users].findIndex(
      /**
       * @param {User} user
       */
      (user) => user.id == userid
    );
    if (index === -1) {
      return false;
    } else {
      this[users].splice(index, 1);
      writeFile(this[users]);
      return true;
    }
  }
}

const collection = new usersCollection();
module.exports = collection;
