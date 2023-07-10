class PasswordHasherDictionary {

    static #SALT = "Bw==,";
    static #ITERATION = 8;
    static #MEM_COST = 14
    static #LENGTH = 64;

    static get SALT() {
        return this.#SALT;
    }

    static get ITERATION() {
        return this.#ITERATION;
    }

    static get MEM_COST() {
        return this.#MEM_COST;
    }

    static get LENGTH() {
        return this.#LENGTH;
    }
}

module.exports = PasswordHasherDictionary;