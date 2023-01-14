const assert = require('assert')
const Room = require ('../models/room.js')

describe('Room', function () {

    let room

beforeEach(function () {
        room = new Room(21)
})

    it('should have an area in square metres', function (){
        const expected = 21
        assert.strictEqual(room.areaInSquareMetres , expected)
    })

    it('should start not painted', function () {
        const expected = false
        assert.strictEqual(room.isPainted, expected)
    })

    it('should be able to paint the room', function () {
            room.paint();
            const expected = true
            assert.strictEqual(room.isPainted, expected)
    })

})