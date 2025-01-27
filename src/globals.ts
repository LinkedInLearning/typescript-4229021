type Somme = {
    x: number,
    y: number
}

function addition({ x, y }: Somme) {
    return x + y
}

// tsc src/types.ts --declaration
