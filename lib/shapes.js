
class Shapes {
    constructor() {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.characters = characters;
    }
}

// obtained from W3schools.com

class Circle extends Shapes {
    render(){
        return `<rect width="100%" height="100%" fill="white"/><circle cx="150" cy="100" r="80" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${this.shapeColor}" /><text x="148" y="120" font-size="60" text-anchor="middle" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${this.textColor}">${this.characters}</text>`;
    }
}

class Triangle extends Shapes {
    render(){
        return `<rect width="100%" height="100%" fill="white"/><polygon points="150, 18 244, 182 56, 182" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${this.shapeColor}" /><text x="152" y="152" font-size="50" text-anchor="middle" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${this.textColor}">${this.characters}</text>`;
    }
}

class Square extends Shapes{
    render(){
        return `<rect width="100%" height="100%" fill="white" /><rect x="70" y="28" width="150" height="150" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" fill="${this.shapeColor}" /><text x="145" y="120" font-size="50" stroke="black" style=";stroke-width:1;stroke:rgb(0,0,0)" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>`;}
}

module.exports = {Circle, Triangle, Square};