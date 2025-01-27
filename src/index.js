class Rectangle {
    constructor(hauteur, largeur) {
        this.hauteur = hauteur
        this.largueur = largeur
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.largueur * this.hauteur
    }
}

const carre = new Rectangle(10, 10)
console.log(carre.area)