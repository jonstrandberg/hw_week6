const Decorator = function () {
    this.paintStock = []
}

Decorator.prototype.addCanOfPaint = function (paintCan){
    this.paintStock.push(paintCan)
}

Decorator.prototype.calculateTotalPaintStock = function () {

    let totalPaintStock = 0

    for (const paint of this.paintStock) {
        totalPaintStock += paint.litresOfPaint 
    }
    return totalPaintStock
}

Decorator.prototype.enoughPaint = function (room) {
    return this.calculateTotalPaintStock() >= room.areaInSquareMetres;
};

Decorator.prototype.canPaint = function (room) {
    if (this.enoughPaint(room)) {
        room.paint()
    } else {
    return false
    }
}; 
    

module.exports = Decorator