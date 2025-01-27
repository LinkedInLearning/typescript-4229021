class Manager {
    budget: number = 900
    @withCostEstimation(1000)
    startProject() {
        console.log('Projet accepté')
    }
}

const project = new Manager();
project.startProject();

function withCostEstimation(costEstimate: number) {
    return function <T extends { budget: number }>(target: Function, context: ClassMethodDecoratorContext<T>) {
        return function (...args: any) {
            const instance = this as T

            if (instance.budget > costEstimate) {
                instance.budget = instance.budget - costEstimate
                target.apply(instance, args)
                console.log("Budget restant estimé à : " + instance.budget)
            } else {
                console.log("Le budget de " + instance.budget + " est insuffisant pour ce projet")
            }

            return target
        }
    }
}
