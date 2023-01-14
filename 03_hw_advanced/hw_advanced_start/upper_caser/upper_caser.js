const UpperCaser = function (words) {
    this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
    const upperCaseConverter = this.words.map((word => word.toUpperCase()))
    return upperCaseConverter
}

module.exports = UpperCaser;
