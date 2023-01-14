const assert = require('assert')
const Decorator = require('../models/decorator.js')
const PaintCan = require('../models/paint_can.js')
const Room = require('../models/room.js')

describe('Decorator', function () {

    let paintCan1
    let paintCan2
    let paintCan3
    let paintCan4
    let room
    let decorator

    beforeEach(function () {
        paintCan1 = new PaintCan(4)
        paintCan2 = new PaintCan(19)
        paintCan3 = new PaintCan(15)
        paintCan4 = new PaintCan(0)
        room = new Room(21)
        decorator = new Decorator()
    })

    it('should start wiht an empty paint stock', function() {
        const expected = []
        assert.deepStrictEqual(decorator.paintStock, expected)
    })

    it('should be able to add a can of paint to paint stock', function () {
        decorator.addCanOfPaint(paintCan1)
        decorator.addCanOfPaint(paintCan2)
        const expected = [paintCan1, paintCan2]
        assert.deepStrictEqual(decorator.paintStock, expected)
    })

    it('should be able to calculate total litres paint it has in stock', function () {
        decorator.addCanOfPaint(paintCan1)
        decorator.addCanOfPaint(paintCan2)
        decorator.addCanOfPaint(paintCan3)
        decorator.addCanOfPaint(paintCan4)
        const expected = 38
        assert.deepStrictEqual(decorator.calculateTotalPaintStock(), expected)
    })

    it('should be able to calculate whether it has enough paint to paint a room', function() {
        decorator.addCanOfPaint(paintCan2)
        decorator.addCanOfPaint(paintCan3)
        const expected = true
        assert.deepStrictEqual(decorator.enoughPaint(room), expected)
    })

    it('should be able to calculate whether it has enough paint to paint a room', function() {
        decorator.addCanOfPaint(paintCan1)
        decorator.addCanOfPaint(paintCan4)
        const expected = false
        assert.deepStrictEqual(decorator.enoughPaint(room), expected)
    })

    it('should be able to paint a room if there is enough paint in stock', function() {
        decorator.addCanOfPaint(paintCan2)
        decorator.addCanOfPaint(paintCan3)
        decorator.canPaint(room)
        const expected = true
        assert.strictEqual(room.isPainted, expected)
    })

    it('should not paint a room if there is not enough paint in stock', function() {
        decorator.addCanOfPaint(paintCan1)
        decorator.addCanOfPaint(paintCan4)
        decorator.canPaint(room)
        const expected = false
        assert.strictEqual(room.isPainted, expected)
    })

})