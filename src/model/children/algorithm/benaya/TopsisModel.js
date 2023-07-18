const BaseModel = require("../../../parent/BaseModel");

class TopsisModel extends BaseModel {
    #nama;
    #kedisiplinan;
    #hasil_kerja;
    #pengetahuan;
    #sikap;
    #kerja_sama

    get nama() {
        return this.#nama;
    }

    set nama(value) {
        this.#nama = value;
    }

    get kedisiplinan() {
        return this.#kedisiplinan;
    }

    set kedisiplinan(value) {
        this.#kedisiplinan = value;
    }

    get hasil_kerja() {
        return this.#hasil_kerja;
    }

    set hasil_kerja(value) {
        this.#hasil_kerja = value;
    }

    get pengetahuan() {
        return this.#pengetahuan;
    }

    set pengetahuan(value) {
        this.#pengetahuan = value;
    }

    get sikap() {
        return this.#sikap;
    }

    set sikap(value) {
        this.#sikap = value;
    }

    get kerja_sama() {
        return this.#kerja_sama;
    }

    set kerja_sama(value) {
        this.#kerja_sama = value;
    }

    toJSON() {
        let json = {};

        if (this.nama !== undefined) {
            json.nama = this.nama;
        }

        if (this.kedisiplinan !== undefined) {
            json.kedisiplinan = this.kedisiplinan;
        }

        if (this.hasil_kerja !== undefined) {
            json.hasil_kerja = this.hasil_kerja;
        }

        if (this.pengetahuan !== undefined) {
            json.pengetahuan = this.pengetahuan;
        }

        if (this.sikap !== undefined) {
            json.sikap = this.sikap;
        }

        if (this.kerja_sama !== undefined) {
            json.kerja_sama = this.kerja_sama;
        }

        return json;
    }
}

module.exports = TopsisModel;