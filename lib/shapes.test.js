const {Circle, Square, Triangle} = require('./shapes');


describe('square', () => {
    it('should create a square with user inputs', () => {
        const shape = new Square();
        shape.setProperties("blue", "black", "PIE");
        expect(shape.render()).toEqual(
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="200" height="200" fill="blue"/>
            <text x="105" y="125" font-size="60" text-anchor="middle" fill="black">PIE</text></svg>`);
    });
});

