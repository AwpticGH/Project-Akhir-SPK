const BaseModel = require("../../../parent/BaseModel");

class TopsisModel extends BaseModel {

    _uid;
    _first_name;
    _last_name;
    _scores = [];
    _ternormalisasi = [];
    _terbobot = [];
    _nilaiDPlus;
    _nilaiDMinus;
    _hasil;
    _rank;

    get uid() {
        return this._uid;
    }

    set uid(value) {
        this._uid = value;
    }

    get first_name() {
        return this._first_name;
    }

    set first_name(value) {
        this._first_name = value;
    }

    get last_name() {
        return this._last_name;
    }

    set last_name(value) {
        this._last_name = value;
    }

    get scores() {
        return this._scores;
    }

    set scores(value) {
        this._scores = value;
    }

    get ternormalisasi() {
        return this._ternormalisasi;
    }

    set ternormalisasi(value) {
        this._ternormalisasi = value;
    }

    get terbobot() {
        return this._terbobot;
    }

    set terbobot(value) {
        this._terbobot = value;
    }

    get nilaiDPlus() {
        return this._nilaiDPlus;
    }

    set nilaiDPlus(value) {
        this._nilaiDPlus = value;
    }

    get nilaiDMinus() {
        return this._nilaiDMinus;
    }

    set nilaiDMinus(value) {
        this._nilaiDMinus = value;
    }

    get hasil() {
        return this._hasil;
    }

    set hasil(value) {
        this._hasil = value;
    }

    get rank() {
        return this._rank;
    }

    set rank(value) {
        this._rank = value;
    }

    toJSON() {
        let json = {};

        if (this.first_name !== undefined) {
            json.first_name = this.first_name;
        }

        if (this.last_name !== undefined) {
            json.last_name = this.last_name;
        }

        if (this.scores !== undefined) {
            json.scores = this.scores;
        }

        if (this.ternormalisasi !== undefined) {
            json.ternormalisasi = this.ternormalisasi;
        }

        if (this.terbobot !== undefined) {
            json.terbobot = this.terbobot;
        }

        if (this.hasil !== undefined) {
            json.hasil = this.hasil;
        }

        if (this.rank !== undefined) {
            json.rank = this.rank;
        }

        return json;
    }
}

module.exports = TopsisModel;