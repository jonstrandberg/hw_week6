const PaintCan = function (litresOfPaint) {
    this.litresOfPaint = litresOfPaint
}

PaintCan.prototype.isEmpty = function () {
    return !this.litresOfPaint
}

PaintCan.prototype.empty = function () {
    this.litresOfPaint = 0
}

module.exports = PaintCan