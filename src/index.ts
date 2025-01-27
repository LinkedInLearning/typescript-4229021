// Exemple 1
@showDecoratorData
class Manager1 {
    task: string = "Une simple tâche"
    project: string = "Une simple projet"

    constructor() {
        console.log("Initialisation de le classe Manager")
    }
}

//const manager1 = new Manager1()
//console.log(manager1)

function showDecoratorData(value: Function, context: ClassDecoratorContext) {
    console.log("value : ")
    console.log(value)
    console.log("context")
    console.log(context)
    context.addInitializer(() => {
        console.log(context.name)
    })
}



// Exemple 2
@addDateOnPrototype
class Manager2 {
    task: string = "Une simple tâche"
    project: string = "Une simple projet"

    constructor() {
        console.log("Initialisation de le classe Manager2")
    }
}

const manager2 = new Manager2()
console.log(manager2)

function addDateOnPrototype(value: Function, context: ClassDecoratorContext) {
    value.prototype.employeeDate = new Date().toISOString()
}



// Exemple 3
@addDateOnObject
class Manager3 {
    task: string = "Une simple tâche"
    project: string = "Une simple projet"

    constructor() {
        console.log("Initialisation de le classe Manager3")
    }
}

const manager3 = new Manager3()
console.log(manager3)

function addDateOnObject<T extends { new(...args: any[]): {} }>(baseClass: T, context: ClassDecoratorContext) {
    return class extends baseClass {
        managerDate = new Date().toISOString()
        constructor(...args: any[]) {
            super(...args)
            console.log("Ajout du employment date à " + baseClass.name)
        }
    }
}