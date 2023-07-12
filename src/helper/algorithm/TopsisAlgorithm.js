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


}

module.exports = TopsisAlgorithm;