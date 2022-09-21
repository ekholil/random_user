const shortid = require("shortid");

class User {
  /**
   * User will receive gender, name, contact, address and photoUrl
   * @param {string} gender
   * @param {string} name
   * @param {string} contact
   * @param {string} address
   * @param {string} photoUrl
   */
  constructor(gender, name, contact, address, photoUrl) {
    this.id = shortid.generate();
    this.name = name;
    this.contact = contact;
    this.gender = gender;
    this.address = address;
    this.photoUrl = photoUrl;
  }
}
module.exports = User;
