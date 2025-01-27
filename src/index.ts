// Les mixins

type Constructor<T = {}> = new (...args: any[]) => T;

function ClassA<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        proprieteClassA: string = "ici la proprieteClassA"
    };
}

function ClassB<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        proprieteClassB: string = "ici la proprieteClassB"
    };
}


class User {
    name = 'Merlin';
}

// Héritage simple
const mixin1 = ClassA(User);
let demoMixin1 = new mixin1()
demoMixin1.proprieteClassA


// Héritage multiple
const mixin2 = ClassA(ClassB(User));
let demoMixin2 = new mixin2()
demoMixin2.proprieteClassA
demoMixin2.proprieteClassB
