const assert = require('assert')
const PaintCan = require('../models/paint_can.js')

describe('Paint Can', function () {

    let paintCan;

    beforeEach(function () {
        paintCan = new PaintCan(4)
    })

    it('should have a number of litres of paint', function () {
        const expected = 4
        assert.strictEqual(paintCan.litresOfPaint, expected)
    })

    it('should be able to check if empty', function () {
        const expected = false
        assert.strictEqual(paintCan.isEmpty(), expected)
    })

    it('should be able to empty itself', function () {
        paintCan.empty();
        const expected = true 
        assert.strictEqual(paintCan.isEmpty(), expected)
    })

})


