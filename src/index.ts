// Intersection

type Colorful = {
    color: string;
}

type Circle = {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

const circleA: ColorfulCircle = {
    color: "blue",
    radius: 12
}