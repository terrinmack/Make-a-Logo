
class Shapes {
    constructor(shapeColor, textColor, characters) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.characters = characters;
    }

    setProperties(shapeColor, textColor, characters) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.characters = characters;
    }
}

// obtained from W3schools.com
// super = parent in constructor

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
class Circle extends Shapes {
    constructor(shapeColor, textColor, characters) {
        super(shapeColor, textColor, characters);
    }
    render() {
        console.log('Generated logo.svg')
        return `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text></svg>`
    }
}

class Square extends Shapes {
    constructor(shapeColor, textColor, characters) {
        super(shapeColor, textColor, characters);
    }
    render() {
        console.log('Generated logo.svg')
        return `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="200" height="200" fill="${this.shapeColor}"/>
                <text x="105" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text></svg>
                `
    }
}

class Triangle extends Shapes {
    constructor(shapeColor, textColor, characters) {
        super(shapeColor, textColor, characters);
    }
    render() {
        console.log('Generated logo.svg')
        return `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <polygon points ="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
                <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.characters}</text></svg>
                `
    }
}

module.exports = { Circle, Square, Triangle };