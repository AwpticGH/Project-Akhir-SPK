const PasswordHasherDictionary = require("../../dictionary/helper/PasswordHasherDictionary");
const crypto  = require("node:crypto");

class StringGenerator {
    static generateSecretKey() {
        return crypto.randomBytes(32).toString("hex");
    }

    static generateUid() {
        return crypto.randomBytes(16).toString("hex");
    }

    static #generateHashedPassword(password) {
        return new Promise((resolve, reject) => {
            crypto.scrypt(
                password,
                PasswordHasherDictionary.SALT,
                PasswordHasherDictionary.LENGTH,
                {
                    N: PasswordHasherDictionary.ITERATION,
                    r: 8,
                    p: PasswordHasherDictionary.MEM_COST
                },
                (err, derivedKey) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    }

                    let hashedPassword = derivedKey.toString("hex");
                    resolve(hashedPassword);
                }
            )
        });
    }

    static async generateHashedPassword(password) {
        let hashedPassword;
        try {
            hashedPassword = await this.#generateHashedPassword(password);
        } catch (error) {
            console.error(error);
        }
        return hashedPassword;
    }
}

module.exports = StringGenerator;