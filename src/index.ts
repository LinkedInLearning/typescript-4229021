class Rectangle {
    private hauteur: number;
    private largueur: number;

    constructor(hauteur: number, largeur: number) {
        this.hauteur = hauteur
        this.largueur = largeur
    }

    public get area() {
        return this.calcArea();
    }

    public calcArea() {
        return this.largueur * this.hauteur
    }
}

const carre = new Rectangle(10, 10)
console.log(carre.area)