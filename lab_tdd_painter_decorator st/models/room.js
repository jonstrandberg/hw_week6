const Room = function (areaInSquareMetres) {
    this.areaInSquareMetres = areaInSquareMetres
    this.isPainted = false
}

Room.prototype.paint = function () {
    return this.isPainted = true
}

module.exports = Room