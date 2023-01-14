const IsogramFinder = function (word) {
    this.word = word

}

IsogramFinder.prototype.isIsogram = function () {
    const lowerCase = this.word.toLowerCase()
    const letters = lowerCase.split("")
    const isUnique = letters.filter(function(letter, index, self) {
        return self.indexOf(letter) === index;});
    return letters.length === isUnique.length
}

module.exports = IsogramFinder;
