class SortingAlgorithm {

    static bubbleSort(models) {
        const length = models.length;

        for (let i = 0; i < length - 1; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                if (models[j].hasil < models[j + 1].hasil) {
                    // Swap elements
                    const temp = models[j];
                    models[j] = models[j + 1];
                    models[j + 1] = temp;
                }
            }
        }

        return models;
    }

}

module.exports = SortingAlgorithm;