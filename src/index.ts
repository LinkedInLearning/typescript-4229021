type Task = {
    name: string,
    level: 'facile' | 'moyen' | 'difficile'
}

class Manager {
    @addEasyTask
    task: Task[] = []
}

const manager = new Manager()
console.log(manager)

function addEasyTask<T, V extends Task[]>(target: undefined, context: ClassFieldDecoratorContext<T, V>) {
    return function (args: V) {
        args.push({
            name: 'nouvelle tâche',
            level: 'facile'
        })
        return args;
    }
}


