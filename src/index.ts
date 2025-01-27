// Le typage et chaînage optionnels

function calcul(a: number, b: number, c?: number) {
    return a + b + (c ?? 0);
}

console.log(calcul(2, 3))
console.log(calcul(2, 3, 4))


interface Pet {
    owner: string
    cat: {
        name: string
    }
    dog?: {
        name: string
    }
}

let petA: Pet = {
    owner: 'Alice',
    cat: {
        name: 'Dinah',
    },
};

const dogName = petA.dog?.name;
