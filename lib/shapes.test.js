const { Circle, Square, Triangle } = require('./shapes');

describe("circle", () => {
    test("should create a circle with user inputs", () => {
        const shape = new Circle();
        shape.setProperties("blue", "black", "PIE");
        const renderedShape = shape.render().replaceAll(/\s/g, "");
        const expectedSvg = `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="blue" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">PIE</text></svg>`.replaceAll(
                /\s/g,
                ""
        );
        expect(renderedShape).toEqual(expectedSvg);
    });
});

describe("square", () => {
    test("should create a square with user inputs", () => {
        const shape = new Square();
        shape.setProperties("blue", "black", "PIE");
        const renderedShape = shape.render().replaceAll(/\s/g, "");
        const expectedSvg = `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="200" height="200" fill="blue"/>
                <text x="105" y="125" font-size="60" text-anchor="middle" fill="black">PIE</text></svg>`.replaceAll(
                /\s/g,
                ""
        );
        expect(renderedShape).toEqual(expectedSvg);
    });
});

describe("triangle", () => {
    test("should create a triangle with user inputs", () => {
        const shape = new Triangle();
        shape.setProperties("blue", "black", "PIE");
        const renderedShape = shape.render().replaceAll(/\s/g, "");
        const expectedSvg = `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points ="150, 18 244, 182 56, 182" fill="blue" />
                <text x="150" y="145" font-size="60" text-anchor="middle" fill="black">PIE</text></svg>`.replaceAll(
                /\s/g,
                ""
        );
        expect(renderedShape).toEqual(expectedSvg);
    });
});
