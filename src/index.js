// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix !== undefined) {
        return matrix
            .map((el, i) => {
                if (i % 2 === 1) {
                    return el.reverse();
                } else {
                    return el;
                }
            })
            .reduce((a, b) => a.concat(b), []);
    } else {
        return [];
    }
};
