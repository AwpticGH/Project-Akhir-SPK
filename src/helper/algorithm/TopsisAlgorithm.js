class TopsisAlgorithm {

    static sqrt(val) {
        return Math.sqrt(val);
    }

    static squared(val) {
        return Math.pow(val, 2);
    }

    static pembagi(values) {
        let total_squared = 0;
        let length = values.length;
        for (let i = 0; i < length; i++) {
            total_squared += this.squared(values[i]);
        }

        return this.sqrt(total_squared);
    }

    static normalisasi(val, pembagi) {
        return val / pembagi;
    }

    static bobot(ternormalisasi, valBobot) {
        return ternormalisasi * valBobot;
    }

    static hitungAPlus(values, bobot) {
        let result = 0;
        if (bobot === "benefit" || bobot === "cost") {
            result = bobot === "benefit" ? Math.max(values) : Math.min(values);
        } else {
            throw new Error(`${__filename}: bobot must either be 'benefit' or 'cost'`);
        }
        return result;
    }

    static hitungAMinus(values, bobot) {
        let result = 0;
        if (bobot === "benefit" || bobot === "cost") {
            result = bobot === "benefit" ? Math.min(values) : Math.max(values);
        } else {
            throw new Error(`${__filename}: bobot must either be 'benefit' or 'cost'`);
        }
        return result;
    }


    static hitungNilaiD(valuesA, valuesTerbobot) {
        let total_squared = 0;
        let length = valuesA.length;
        for (let i = 0; i < length; i++) {
            total_squared += this.squared(valuesA[i] - valuesTerbobot[i]);
        }

        return this.sqrt(total_squared);
    }

    static hitungHasil(valDPlus, valDMinus) {
        return valDMinus / (valDPlus + valDMinus);
    }
}

module.exports = TopsisAlgorithm;