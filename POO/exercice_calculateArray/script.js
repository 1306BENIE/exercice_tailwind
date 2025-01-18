/*
Exercice :*EXO3

1. Créez une classe parent Shape avec :
    - Une méthode calculateArea() qui retourne : "Aire non définie pour cette forme."
2. Créez deux classes enfants Rectangle et Circle :
    - Rectangle a des propriétés width et height et redéfinit calculateArea() pour retourner l'aire du rectangle.
    - Circle a une propriété radius et redéfinit calculateArea() pour retourner l'aire du cercle.
3. Créez des instances de Rectangle et Circle, et appelez calculateArea() sur chacune.
*/

class Shape {
    calculateArea() {
        return "Aire non définie pour cette forme.";
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return `L' aire du rectangle = ` + this.width + this.height;
    }
    
};

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return `L' aire du rectangle = ` + Math.PI * this.radius * this.radius;
    }
};

const rectangle = new Rectangle(5, 3);
console.log(rectangle.calculateArea());

const circle = new Circle(4);
console.log(circle.calculateArea());